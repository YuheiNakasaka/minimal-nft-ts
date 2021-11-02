import Web3 from "web3";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PUBLIC_KEY = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

async function viewNFT() {
  const web3 = new Web3("http://localhost:8545");
  const contract = require("../artifacts/contracts/NFT.sol/NFT.json");
  const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
  nftContract.methods.balanceOf(PUBLIC_KEY).call().then(console.log);
}

viewNFT();
