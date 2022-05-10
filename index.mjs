
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const reachLib = loadStdlib();

const startingBalance = reachLib.parseCurrency(1000);

const schmeckler = await reachLib.newTestAccount(startingBalance);

console.log(reachLib.formatAddress(schmeckler))

const schmucks = await reachLib.newTestAccounts(10, startingBalance);

const schmeckleShop = await schmeckler.contract(backend);

const schmeckles = await reachLib.launchToken(schmeckler, "Schmeckles", "SHM", {decimals:0, supply: 10_000_000_000});

const waitingTime = 250;

try {await schmeckleShop.p.Schmeckler({
                
  log: ((...args) => {                  
    console.log(...args);
  }),

  setUpShop:() => ({
    fee: 10000,
    initialPrice: 1_000000,
    rebaseTime: waitingTime,
    schmeckles: schmeckles.id,
    schmeckleAmount: reachLib.bigNumberify(10_000_000_000)
  }),  

  ready: ()=>{
    console.log("The contract is ready!")
    throw 42;
  }

})}
catch(e){
  if(e !== 42){
    throw e;
  }
}

const optin = async(who) => 
  await who.tokenAccept(schmeckles.id);

for (let i = 0; i < schmucks.length; ++i){
  await optin(schmucks[i]);
}

const buySchmeckles = async(number)=>{
  const schmuck = schmucks[number];
  const deployedContract = schmuck.contract(backend,schmeckleShop.getInfo());
  console.log("Schmuck ", reachLib.formatAddress(schmuck), " is trying to buy some Schmeckles!");


  try{await deployedContract.apis.Schmuck.buy(1);
  console.log("He bought!")
  }
  catch (error){
    console.error("Couldn't Buy")
    console.log(error)
  }
  await getView();
}

const sellSchmeckles = async(number)=>{
  const schmuck = schmucks[number];
  const deployedContract = schmuck.contract(backend,schmeckleShop.getInfo());
  console.log("Schmuck ", reachLib.formatAddress(schmuck), " is trying to sell some Schmeckles!");

  try{await deployedContract.apis.Schmuck.sell(1);
  console.log("He sold!")
  }
  catch (error){
    console.error("Couldn't Sell")
    console.log(error)
  }
  await getView();
}

const rebaseShop = async(number)=>{



  const schmuck = schmucks[number];
  const deployedContract = schmuck.contract(backend,schmeckleShop.getInfo());



  try{await deployedContract.apis.Schmuck.rebase();
  console.log("He rebased the shop!")
  }
  catch (error){
    console.error("Couldn't Rebase")
    console.log(error)
  }
  await getView();
}

const claimFees = async(user) =>{
  const claimer = user;
  const deployedContract = claimer.contract(backend, schmeckleShop.getInfo());
  console.log("User ", reachLib.formatAddress(user), " is trying to claim fees for Schmeckler!");
  try{await deployedContract.apis.SchmecklerAPI.claimFees();
    console.log("Fees where claimed!")
    }
    catch (error){
      console.error("Couldn't claim fees")
      console.log(error)
    }
    await getView();
}

const getView = async() =>{
  const viewCtc = await schmeckler.contract(backend, schmeckleShop.getInfo());
  const shopView = await viewCtc.v.SchmeckleShopView;
  const shopInfo = await shopView.read();
  return console.log("Are we catching up? ", shopInfo[1][1], 
  "\nMaximum Claimed Schmeckles: ", reachLib.bigNumberToNumber(shopInfo[1][2]), 
  "\nCurrently Claimed Schmeckles: ", reachLib.bigNumberToNumber(shopInfo[1][3]),
  "\nCurrent Reserve: ", reachLib.bigNumberToNumber(shopInfo[1][4]),
  "\nCurrent Schmekle Buy Price: ", reachLib.bigNumberToNumber(shopInfo[1][5]),
  "\nCurrent Schmeckle Sell Price", reachLib.bigNumberToNumber(shopInfo[1][6]),
  "\nCurrent fees collected: ", reachLib.bigNumberToNumber(shopInfo[1][7]),
  "\nTime until it finishes: ", reachLib.bigNumberToNumber(shopInfo[1][8]));
}

const getDeadline = async() =>{
  const viewCtc = await schmeckler.contract(backend, schmeckleShop.getInfo());
  const shopView = await viewCtc.v.SchmeckleShopView;
  const shopInfo = await shopView.read();
  return shopInfo[1][8]
}

/*await sellSchmeckles(0)
await getView()
await buySchmeckles(0)
await buySchmeckles(1)
await buySchmeckles(2)
await buySchmeckles(3)
await buySchmeckles(4)
await buySchmeckles(5)
await buySchmeckles(6)
await buySchmeckles(7)
await sellSchmeckles(3)
await sellSchmeckles(3)
await claimFees(schmucks[1])
await claimFees(schmucks[1])
await buySchmeckles(3)
await buySchmeckles(3)
await buySchmeckles(3)
await buySchmeckles(3)
await buySchmeckles(3)
await buySchmeckles(8)
await buySchmeckles(9)
await sellSchmeckles(1)
await rebaseShop(6)
await claimFees(schmeckler)
await buySchmeckles(7)
await sellSchmeckles(0)
await sellSchmeckles(3)
await sellSchmeckles(5)
await buySchmeckles(5)
await sellSchmeckles(7)
await buySchmeckles(3)
await buySchmeckles(5)
await claimFees(schmucks[1])
await sellSchmeckles(5)
await sellSchmeckles(3)

console.log("We are now going to wait for the deadline to arrive!");
const deadline = await getDeadline();
console.log(reachLib.bigNumberToNumber(deadline));
console.log(reachLib.bigNumberToNumber(await reachLib.getNetworkSecs()));
console.log(reachLib.bigNumberToNumber(deadline) + 5)

await reachLib.waitUntilSecs(reachLib.bigNumberify(reachLib.bigNumberToNumber(deadline) + 5));

console.log(reachLib.bigNumberToNumber(await reachLib.getNetworkSecs()));

await claimFees(schmucks[9])
await rebaseShop(9)
await getView()
await rebaseShop(3)*/

await buySchmeckles(0)
await buySchmeckles(1)
await buySchmeckles(2)
await buySchmeckles(3)
await buySchmeckles(4)
await buySchmeckles(5)
await buySchmeckles(6)
await buySchmeckles(7)
await sellSchmeckles(0)
await sellSchmeckles(1)
await sellSchmeckles(2)
await sellSchmeckles(3)
await sellSchmeckles(4)
await sellSchmeckles(5)
await sellSchmeckles(6)
await sellSchmeckles(7)
await buySchmeckles(0)
await buySchmeckles(1)
await buySchmeckles(2)
await buySchmeckles(3)
await buySchmeckles(4)
await buySchmeckles(5)
await buySchmeckles(6)
await buySchmeckles(7)

for ( const who of [ schmeckler, ...schmucks ]) {
  console.warn(reachLib.formatAddress(who), 'has',
    reachLib.formatCurrency(await reachLib.balanceOf(who)), "ALGO",
    reachLib.formatWithDecimals(await reachLib.balanceOf(who, schmeckles.id), 0), "SHM");
}