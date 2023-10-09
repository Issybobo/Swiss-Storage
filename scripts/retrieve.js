const { ethers } = require("ethers");

// Initialize providers for Mumbai and Swisstronik testnets
const swisstronikRpcUrl = process.env.SWISSTRON_ENDPOINT;
const mumbaiRpcUrl = process.env.RPC_URL;

const providerSwisstronik = new ethers.providers.JsonRpcProvider(swisstronikRpcUrl);
const providerMumbai = new ethers.providers.JsonRpcProvider(mumbaiRpcUrl);

// Contract addresses on both networks
const contractAddressSwisstronik = '0x3C4558898e02b055E211f9081eeda8f3E415ceb1';
const contractAddressMumbai = '0x97FF8d7fa8dBb034cc787252c02F9D1DDB3f8ABf';

// Function to retrieve data from the contract
async function getDataFromContract(provider, contractAddress) {
  const data = await provider.getStorageAt(contractAddress, 0); 
  return ethers.utils.toUtf8String(data);
}

// Get data from the contracts on both networks
async function main() {
  const dataSwisstronik = await getDataFromContract(providerSwisstronik, contractAddressSwisstronik);
  const dataMumbai = await getDataFromContract(providerMumbai, contractAddressMumbai);

  console.log('Data on Swisstronik:', dataSwisstronik);
  console.log('Data on Mumbai:', dataMumbai);
}

main();
