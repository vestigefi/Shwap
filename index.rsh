'reach 0.1';

/* Flow of the contract is as follows:
User creates a a schmeckle shop, this shop sells schmeckles at an increasing amount
the tokens can then be burnt to claim a proportional amount of the shop's vault
*/

export const main = Reach.App(() => {

  setOptions({ connectors: [ALGO] });


  const Schmeckler = Participant("Schmeckler", {
        setUpShop: Fun([],Object({
        fee: UInt,
        initialPrice: UInt,
        schmeckles: Token,
        schmeckleAmount: UInt})),
      ready: Fun([], Null)});

  const Schmuck = API("Schmuck", {
    buy: Fun([UInt], Bool),
    sell: Fun([UInt], Bool)
  });

  const SchmecklerAPI = API("SchmecklerAPI", {
    claimFees: Fun([], Bool)
  })

  init();

  Schmeckler.only(() => {
    const{
      fee, 
      initialPrice,
      schmeckles,
      schmeckleAmount 
    }= declassify(interact.setUpShop());})


  Schmeckler.publish(
      fee, 
      initialPrice,
      schmeckles,
      schmeckleAmount
  );



  commit();
  Schmeckler.pay([[schmeckleAmount, schmeckles]]);

  Schmeckler.interact.ready();
  const intialBalance = balance(schmeckles);

  const [keepGoing, makingUp, maxClaimedShmeckles, currentlyClaimedShmeckles, reserves, schmeckleBuyPrice, schmeckleSellPrice, schmecklerFees] = 
  parallelReduce([true, false, 0, 0,  0, initialPrice , 0, 0])
  .invariant(balance() == reserves + schmecklerFees 
  && balance(schmeckles) == intialBalance - currentlyClaimedShmeckles)
  .while(keepGoing && balance(schmeckles) > 0)
  .paySpec([ schmeckles ])
  .api(Schmuck.buy,
    (amount) => {assume(amount == 1)},
    (_) => [(fee + schmeckleBuyPrice), [0, schmeckles]],
    (amount, k) => {
      require (amount == 1);
      transfer([[amount, schmeckles]]).to(this)
      k(true);

      const newCurrentlyClaimedSchmekles = currentlyClaimedShmeckles + 1;
      const currentlyMakingUp = maxClaimedShmeckles > newCurrentlyClaimedSchmekles;
      const newMaxClaimedSchmekle = (currentlyMakingUp) ? maxClaimedShmeckles : newCurrentlyClaimedSchmekles;
      const newReserves = reserves + schmeckleBuyPrice;
      const newSchmeckleBuyPrice = currentlyMakingUp ? schmeckleSellPrice : schmeckleBuyPrice + 1;
      const newSchmeckleSellPrice = currentlyMakingUp ? schmeckleSellPrice : newReserves / newCurrentlyClaimedSchmekles; 
      const newSchmecklerFees = schmecklerFees + fee;
      return[
        true,
        newMaxClaimedSchmekle == newCurrentlyClaimedSchmekles,
        newMaxClaimedSchmekle,
        newCurrentlyClaimedSchmekles,
        newReserves,
        newSchmeckleBuyPrice,
        newSchmeckleSellPrice,
        newSchmecklerFees]})

  .api(Schmuck.sell,
    (amount) => {assume (amount == 1 && balance(schmeckles) > 0 && currentlyClaimedShmeckles > 0 && balance() > schmeckleSellPrice)},
    (amount) => [fee, [amount, schmeckles]],
    (amount, k) => {
      require((amount == 1 && balance(schmeckles) > 0 && currentlyClaimedShmeckles > 0 && balance() > schmeckleSellPrice) )

      transfer(schmeckleSellPrice).to(this)
      k(true);

      const newCurrentlyClaimedSchmekles = currentlyClaimedShmeckles - 1;
      const newReserves = reserves - schmeckleSellPrice;
      const newSchmeckleBuyPrice = newCurrentlyClaimedSchmekles == 0 ?  initialPrice: schmeckleSellPrice;
      const newSchmeckleSellPrice = schmeckleSellPrice; 
      const newSchmecklerFees = schmecklerFees + fee;
      return[
        true,
        true,
        maxClaimedShmeckles,
        newCurrentlyClaimedSchmekles,
        newReserves,
        newSchmeckleBuyPrice,
        newSchmeckleSellPrice,
        newSchmecklerFees]})

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
        0]})


  transfer([balance(), [balance(schmeckles), schmeckles]]).to(Schmeckler);
  commit();
  exit();
});
