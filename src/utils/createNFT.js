import {
  Marketplaceabi,
  Marketplaceaddress,
  collectionabi,
  collectionaddress,
} from "../constant/constant";
import Web3 from "web3";
function createNFT() {
  const web3 = new Web3(window.ethereum);

  const nftInstance = new web3.eth.Contract(Marketplaceabi, Marketplaceaddress);
  const collInstance = new web3.eth.Contract(collectionabi, collectionaddress);
  nftInstance.methods.createMarketplaceItem(
    "QmWfLyQHsF8PMV34Vq89TD9TJTJhtoUijYyi7SRB1yi7i8",
    collInstance.methods.createToken(
      "https://ipfs.io/ipfs/QmWfLyQHsF8PMV34Vq89TD9TJTJhtoUijYyi7SRB1yi7i8?filename=metal1.jpg"
    ),
    0.01
  );
}

createNFT();
