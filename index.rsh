'reach 0.1';

/* Flow of the contract is as follows:
User creates a a schmeckle shop, this shop sells schmeckles at an increasing amount
the tokens can then be burnt to claim a proportional amount of the shop's vault
*/

const shopState = Tuple(Token, Bool, UInt, UInt, UInt, UInt, UInt)

const tokenParameter = Object({name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32), 
  supply: UInt, decimals: UInt});

const sumOfArithmeticSeries = (n, a, d) =>{
  const value2 = safeDiv(safeMul(n, safeAdd(safeMul(a,2),safeMul(d,safeSub(n, 1)))),2)
 // const value = safeMul(safeDiv(safeMul(n,1_000_000),2) , safeAdd(safeMul(2 , a) , safeMul(safeSub(n , 1) , d)))
  return safeMul(value2, 100)
}

const howMuchToPay = (amtIn, currentAmtSold, currentMaxAmt, currentSellP, d) =>{
  const amtToMakeUp = currentAmtSold == currentMaxAmt ? 0 : safeSub(currentMaxAmt , currentAmtSold)

  if(amtIn > amtToMakeUp){
    const partToMakeUp = safeMul(amtToMakeUp , currentSellP);
        
    const rest = sumOfArithmeticSeries(safeSub(amtIn,amtToMakeUp), safeAdd(currentMaxAmt , 1), d)
    //const rest = safeMul(sumOfArithmeticSeries(safeSub(amtIn,amtToMakeUp), safeAdd(currentMaxAmt , 1), d), 1_000_000)
    return safeAdd(partToMakeUp , rest)
  }
  else{
    return safeMul(amtIn , currentSellP)
  }}


export const algoShop = Reach.App(() => {
  //setOptions({ verifyArithmetic: true, connectors: [ALGO] });
  const ShopCreator = Participant("ShopCreator", {
        setUpShop: Fun([],Object({
        growthRate: UInt,
        rebaseTime: UInt,
        sCoinParam: tokenParameter})),
      ready: Fun([], Null)});

  const Buyer = API("Buyer", {
    buy: Fun([UInt], Bool),
    sell: Fun([UInt], Bool),
    rebase: Fun([], Bool)
  });

  const ShopView = View("ShopView", {
    read: shopState,
  })

  init();

  ShopCreator.only(() => {
    const {
      growthRate,
      rebaseTime,
      sCoinParam
    }= declassify(interact.setUpShop());
    
        assume(growthRate == 1)
  })


  ShopCreator.publish(
      growthRate,
      rebaseTime,
      sCoinParam
  );


  const mdSCoin = {... sCoinParam}
  const sCoinToken = new Token(mdSCoin);
  const startingTime = thisConsensusSecs();
  require(growthRate == 1)
  commit();

  ShopCreator.publish();
  ShopCreator.interact.ready();

  const [makingUp, peakSold, currentSold, reserves, currentSellPrice, deadline] =
  parallelReduce([false, 0, 0, 0, 0, startingTime])
  .invariant(balance() == reserves && balance(sCoinToken) == safeSub(mdSCoin.supply , currentSold))
  .while(true)
  .define(() =>{
    ShopView.read.set([sCoinToken, makingUp, currentSellPrice, currentSold, reserves, deadline, peakSold])
  })
  .paySpec([sCoinToken])
  .api(Buyer.buy,
    (amt) => assume(amt >= 1 && balance(sCoinToken) >= amt),
    (amt) => [howMuchToPay(amt, currentSold, peakSold, currentSellPrice, growthRate), [0, sCoinToken]],
    (amt, k) =>{
      require(amt >= 1 && balance(sCoinToken) >= amt)
      enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")
      const amtPaid = howMuchToPay(amt, currentSold, peakSold, currentSellPrice, growthRate) 
      const newCurrentSold = safeAdd(currentSold , amt)
      const newPeakSold = newCurrentSold > peakSold ? newCurrentSold : peakSold
      const newMakingUp = !(newCurrentSold >= peakSold)
      const newReserves = safeAdd(reserves , amtPaid)
      const newSellPrice = safeDiv(newReserves , newCurrentSold)

      transfer([0, [amt, sCoinToken]]).to(this)
      k(true)
      return[
        newMakingUp,
        newPeakSold,
        newCurrentSold,
        newReserves,
        newSellPrice,
        deadline
      ]})
  .api(Buyer.sell,
    (amt) => assume(amt >= 1 && safeMul(amt , currentSellPrice ) <= balance()),
    (amt) => [0, [amt, sCoinToken]],
    (amt, k) =>{
      require(amt >= 1 && safeMul(amt , currentSellPrice) <= balance())
      enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")

      const newMakingUp = true;
      const newPeakSold = peakSold;
      const newCurrentSold = safeSub(currentSold , amt)
      const newReserves = safeSub( reserves , safeMul(amt , currentSellPrice ))
      const newSellPrice = currentSellPrice
      const newDeadline = makingUp ? deadline : safeAdd(thisConsensusSecs() , rebaseTime)

      transfer([safeMul(amt , currentSellPrice )]).to(this)
      k(true)
      return[
        newMakingUp,
        newPeakSold,
        newCurrentSold,
        newReserves,
        newSellPrice,
        newDeadline
      ]})
    .api(Buyer.rebase,
      () => assume(makingUp == true),
      () => [0, [1, sCoinToken]],
      (k) =>{
        require(makingUp == true)
        enforce(thisConsensusSecs() >= deadline, "It's not time yet, you can't rebase")

        const newMakingUp = false;
        const newPeakSold = safeSub(currentSold , 1)
        const newCurrentSold = safeSub(currentSold ,1)
        const newReserves = sumOfArithmeticSeries(newCurrentSold, 1, 1)
        const newSellPrice = safeDiv(newReserves , newCurrentSold)
        const newDeadline = safeAdd(deadline , rebaseTime)

        transfer([safeSub(reserves , newReserves)]).to(this)
        k(true)
        return[
          newMakingUp,
          newPeakSold,
          newCurrentSold,
          newReserves,
          newSellPrice,
          newDeadline
      ]})
commit();
exit();});

export const vestShop = Reach.App(() => {
  //setOptions({ verifyArithmetic: true, connectors: [ALGO] });
  const ShopCreator = Participant("ShopCreator", {
        setUpShop: Fun([],Object({
        growthRate: UInt,
        rebaseTime: UInt,
        sCoinParam: tokenParameter,
        vestToken: Token})),
      ready: Fun([], Null)});

  const Buyer = API("Buyer", {
    buy: Fun([UInt], Bool),
    sell: Fun([UInt], Bool),
    rebase: Fun([], Bool)
  });

  const ShopView = View("ShopView", {
    read: shopState,
  })

  init();

  ShopCreator.only(() => {
    const {
      growthRate,
      rebaseTime,
      sCoinParam,
      vestToken
    }= declassify(interact.setUpShop());
    
        assume(growthRate == 1)
  })


  ShopCreator.publish(
      growthRate,
      rebaseTime,
      sCoinParam,
      vestToken
  );

  const mdSCoin = {... sCoinParam}
  const sCoinToken = new Token(mdSCoin);
  const startingTime = thisConsensusSecs();
  require(growthRate == 1)
  commit();

  ShopCreator.publish();
  ShopCreator.interact.ready();

  const [makingUp, peakSold, currentSold, reserves, currentSellPrice, deadline] =
  parallelReduce([false, 0, 0, 0, 0, startingTime])
  .invariant(balance(vestToken) == reserves && balance(sCoinToken) == safeSub(mdSCoin.supply , currentSold))
  .while(true)
  .define(() =>{
    ShopView.read.set([sCoinToken, makingUp, currentSellPrice, currentSold, reserves, deadline, peakSold])
  })
  .paySpec([vestToken, sCoinToken])
  .api(Buyer.buy,
    (amt) => assume(amt >= 1 && balance(sCoinToken) >= amt),
    (amt) => [0, [howMuchToPay(amt, currentSold, peakSold, currentSellPrice, growthRate), vestToken], [0, sCoinToken]],
    (amt, k) =>{
      require(amt >= 1 && balance(sCoinToken) >= amt)
      enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")
      const amtPaid = howMuchToPay(amt, currentSold, peakSold, currentSellPrice, growthRate) 
      const newCurrentSold = safeAdd(currentSold , amt)
      const newPeakSold = newCurrentSold > peakSold ? newCurrentSold : peakSold
      const newMakingUp = !(newCurrentSold >= peakSold)
      const newReserves = safeAdd(reserves , amtPaid)
      const newSellPrice = safeDiv(newReserves , newCurrentSold)
      transfer([0, [amt, sCoinToken]]).to(this)
      k(true)
      return[
        newMakingUp,
        newPeakSold,
        newCurrentSold,
        newReserves,
        newSellPrice,
        deadline
      ]})
  .api(Buyer.sell,
    (amt) => assume(amt >= 1 && safeMul(amt , currentSellPrice ) <= balance(vestToken)),
    (amt) => [0,[0, vestToken] , [amt, sCoinToken]],
    (amt, k) =>{
      require(amt >= 1 && safeMul(amt , currentSellPrice) <= balance(vestToken))
      enforce(thisConsensusSecs() < deadline || makingUp == false, "There's a condition that doesn't allow to buy, try to rebase")
      const newMakingUp = true;
      const newPeakSold = peakSold;
      const newCurrentSold = safeSub(currentSold , amt)
      const newReserves = safeSub( reserves , safeMul(amt , currentSellPrice ))
      const newSellPrice = currentSellPrice
      const newDeadline = makingUp ? deadline : safeAdd(thisConsensusSecs() , rebaseTime)
      transfer([[safeMul(amt , currentSellPrice ), vestToken]]).to(this)
      k(true)
      return[
        newMakingUp,
        newPeakSold,
        newCurrentSold,
        newReserves,
        newSellPrice,
        newDeadline
      ]})
    .api(Buyer.rebase,
      () => assume(makingUp == true),
      () => [0, [0, vestToken], [1, sCoinToken]],
      (k) =>{
        require(makingUp == true)
        enforce(thisConsensusSecs() >= deadline, "It's not time yet, you can't rebase")
        const newMakingUp = false;
        const newPeakSold = safeSub(currentSold , 1)
        const newCurrentSold = safeSub(currentSold ,1)
        const newReserves = sumOfArithmeticSeries(newCurrentSold, 1, 1)
        const newSellPrice = safeDiv(newReserves , newCurrentSold)
        const newDeadline = safeAdd(deadline , rebaseTime)
        transfer([[safeSub(reserves , newReserves), vestToken]]).to(this)
        k(true)
        return[
          newMakingUp,
          newPeakSold,
          newCurrentSold,
          newReserves,
          newSellPrice,
          newDeadline
      ]})
commit();
exit();});