'reach 0.1';

/* Flow of the contract is as follows:
User creates a a schmeckle shop, this shop sells schmeckles at an increasing amount
the tokens can then be burnt to claim a proportional amount of the shop's vault
*/

const schmeckleState = Tuple(Bool, Bool, UInt, UInt, UInt, UInt, UInt, UInt, UInt)

export const main = Reach.App(() => {

  setOptions({ connectors: [ALGO] });
  setOptions({untrustworthyMaps: true});


  const Schmeckler = Participant("Schmeckler", {
        setUpShop: Fun([],Object({
        fee: UInt,
        initialPrice: UInt,
        rebaseTime: UInt,
        schmeckles: Token,
        schmeckleAmount: UInt})),
      ready: Fun([], Null)});

  const Schmuck = API("Schmuck", {
    buy: Fun([UInt], Bool),
    sell: Fun([UInt], Bool),
    rebase: Fun([], Bool)
  });

  const SchmecklerAPI = API("SchmecklerAPI", {
    claimFees: Fun([], Bool),
    //exit: Fun([], Bool)
  })

  const SchmeckleShopView = View("SchmeckleShopView", {
    read: schmeckleState,
  })

  init();

  Schmeckler.only(() => {
    const {
      fee, 
      initialPrice,
      rebaseTime,
      schmeckles,
      schmeckleAmount 
    }= declassify(interact.setUpShop());})


  Schmeckler.publish(
      fee, 
      initialPrice,
      rebaseTime,
      schmeckles,
      schmeckleAmount
  );



  commit();
  Schmeckler.pay([[schmeckleAmount, schmeckles]]);

  Schmeckler.interact.ready();


  const intialBalance = balance(schmeckles);


  const startingTime = lastConsensusTime();

  const [keepGoing, makingUp, maxClaimedShmeckles, currentlyClaimedShmeckles, reserves, schmeckleBuyPrice, schmeckleSellPrice, schmecklerFees, deadline] = 
  parallelReduce([true, false, 0, 0,  0, initialPrice , 0, 0, startingTime])
  .invariant(balance() == reserves + schmecklerFees 
  && balance(schmeckles) == intialBalance - currentlyClaimedShmeckles)
  .define(() => {
    SchmeckleShopView.read.set([keepGoing, makingUp, maxClaimedShmeckles, currentlyClaimedShmeckles, reserves, schmeckleBuyPrice, schmeckleSellPrice, schmecklerFees, deadline]);
  })
  .while(keepGoing && balance(schmeckles) > 0)
  .paySpec([ schmeckles ])
  .api(Schmuck.buy,
    (amount) => {assume(amount == 1)},
    (_) => [(fee + schmeckleBuyPrice), [0, schmeckles]],
    (amount, k) => {
      require (amount == 1);
      transfer([[amount, schmeckles]]).to(this)
      k(true);

      const newCurrentlyClaimedSchmeckles = currentlyClaimedShmeckles + 1;
      const currentlyMakingUp = maxClaimedShmeckles > newCurrentlyClaimedSchmeckles;
      const newMaxClaimedSchmekle = (currentlyMakingUp) ? maxClaimedShmeckles : newCurrentlyClaimedSchmeckles;
      const newReserves = reserves + schmeckleBuyPrice;
      const newSchmeckleBuyPrice = currentlyMakingUp ? schmeckleSellPrice : schmeckleBuyPrice + initialPrice;
      const newSchmeckleSellPrice = currentlyMakingUp ? schmeckleSellPrice : newReserves / newCurrentlyClaimedSchmeckles; 
      const newSchmecklerFees = schmecklerFees + fee;
      return[
        true,
        currentlyMakingUp,
        newMaxClaimedSchmekle,
        newCurrentlyClaimedSchmeckles,
        newReserves,
        newSchmeckleBuyPrice,
        newSchmeckleSellPrice,
        newSchmecklerFees,
        deadline]})

  .api(Schmuck.sell,
    (amount) => {assume (amount == 1 && balance(schmeckles) > 0 && currentlyClaimedShmeckles > 0 && balance() > schmeckleSellPrice)},
    (amount) => [fee, [amount, schmeckles]],
    (amount, k) => {
      require((amount == 1 && balance(schmeckles) > 0 && currentlyClaimedShmeckles > 0 && balance() > schmeckleSellPrice) )

      transfer(schmeckleSellPrice).to(this)
      k(true);

      const newCurrentlyClaimedSchmeckles = currentlyClaimedShmeckles - 1;
      const newMaxClaimedScmeckles = newCurrentlyClaimedSchmeckles == 0 ? 0 : maxClaimedShmeckles;
      const newReserves = reserves - schmeckleSellPrice;
      const newSchmeckleBuyPrice = newCurrentlyClaimedSchmeckles == 0 ?  initialPrice: schmeckleSellPrice;
      const newSchmeckleSellPrice = schmeckleSellPrice; 
      const newSchmecklerFees = schmecklerFees + fee;

      const deadlineStart = makingUp ? deadline : deadline + rebaseTime

      return[
        true,
        true,
        newMaxClaimedScmeckles,
        newCurrentlyClaimedSchmeckles,
        newReserves,
        newSchmeckleBuyPrice,
        newSchmeckleSellPrice,
        newSchmecklerFees,
        deadlineStart]})
        
  .api(Schmuck.rebase,
    () => {assume (lastConsensusTime() > deadline && makingUp == true)},
    () => [fee, [1, schmeckles]],
    (k) => {
      require (lastConsensusTime() > deadline && makingUp == true);  
    
      const newCurrentlyClaimedSchmeckles = currentlyClaimedShmeckles - 1;
      const newMaxClaimedScmeckles = newCurrentlyClaimedSchmeckles;
      const newReserves = (newCurrentlyClaimedSchmeckles * (newCurrentlyClaimedSchmeckles + 1) / 2) * initialPrice;
      const newSchmeckleBuyPrice = newCurrentlyClaimedSchmeckles + initialPrice;
      const newSchmeckleSellPrice = newReserves / newCurrentlyClaimedSchmeckles; 
      const newSchmecklerFees = schmecklerFees + fee;

      transfer(reserves - newReserves).to(this)
      k(true);
      return[
        true,
        true,
        newMaxClaimedScmeckles,
        newCurrentlyClaimedSchmeckles,
        newReserves,
        newSchmeckleBuyPrice,
        newSchmeckleSellPrice,
        newSchmecklerFees,
        deadline]})
    

  .api(SchmecklerAPI.claimFees,
    (k) =>{
      transfer(schmecklerFees).to(Schmeckler)
      k(true); 
      return[
        true,
        makingUp,
        maxClaimedShmeckles,
        currentlyClaimedShmeckles,
        reserves,
        schmeckleBuyPrice,
        schmeckleSellPrice,
        0,
        deadline]})

  transfer([balance(), [balance(schmeckles), schmeckles]]).to(Schmeckler);
  commit();
  exit();
});
