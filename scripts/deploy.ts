import { ethers } from "hardhat";
var Web3 = require('web3');
var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/kNgqkSwSMIQGUQ_wRhjXrWuaB4WoBfGe");

async function main() {
  const GMX = {"name": "GMX", "address": "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a"} 
  const DAI = {"name": "DAI", "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F"} 
  const UNI = {"name": "UNI", "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"} 
  const AAVE = {"name": "AAVE", "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"} 
  const ENS = {"name": "ENS", "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"} 
  const LINK = {"name": "LINK", "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA"} 

  const hexToNum = await ethers.getContractFactory("readStorage");
  const HexToNum = await hexToNum.deploy();
  await HexToNum.deployed();
  
  const allContracts = [GMX, DAI, UNI, AAVE, ENS, LINK] 
  
  for (let i = 0; i < allContracts.length; i++){
    for (let j = 0; j < 5; j++){
      let Content = await ethers.provider.getStorageAt(allContracts[i].address, j)
      console.log(`Content at storage ${j} of ${allContracts[i].name} contract is: ${Content}`)
      const contentsNum = await HexToNum.hexToNum(Content);
      console.log(contentsNum);
      console.log(web3.utils.toAscii(Content));
    }
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
