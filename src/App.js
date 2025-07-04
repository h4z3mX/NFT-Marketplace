import logo from "./logo.svg";
import NavBar from "./components/navbar";
import MarketPage from "./pages/market";
import "./App.css";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Card from "./components/card";
import {
  Marketplaceabi,
  Marketplaceaddress,
  collectionabi,
  collectionaddress,
} from "./constant/constant";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [marketplace, setmarketplace] = useState([]);
  const [collection, setcollection] = useState([]);
  const [name, setNmae] = useState([]);
  const [Price, setPrice] = useState([]);
  const [Image, setImage] = useState([]);
  const [page, setPage] = useState("");

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        setProvider(web3);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        setAccount(address);
        setIsConnected(true);
        const nftInstance = new web3.eth.Contract(
          Marketplaceabi,
          Marketplaceaddress
        );
        const collInstance = new web3.eth.Contract(
          collectionabi,
          collectionaddress
        );
        setmarketplace(nftInstance);
        setcollection(collInstance);
        console.log(nftInstance);
      } catch (err) {
        console.error("Error connecting to Metamask:", err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }
  useEffect(() => {
    connectToMetamask();
    // function createNFT() {
    //   marketplace.methods
    //     .createMarketplaceItem(
    //       "QmWfLyQHsF8PMV34Vq89TD9TJTJhtoUijYyi7SRB1yi7i8",
    //       collection.methods.createToken(
    //         "https://ipfs.io/ipfs/QmWfLyQHsF8PMV34Vq89TD9TJTJhtoUijYyi7SRB1yi7i8?filename=metal1.jpg"
    //       ),
    //       0.01
    //     )
    //     .call();
    // }

    // createNFT();
  }, []);

  function Market() {
    setPage("Market");
  }
  function MyNFT() {
    setPage("MyNFT");
  }

  function fetchMarketplace() {
    return Array(marketplace.methods.fetchMarketplaceItems().call());
  }
  function fetchMyNFT() {
    return Array(marketplace.methods.fetchMyNFT().call());
  }
  // create another page for the market and pass the variable to it
  // create the routes so it doesn't affect the game
  if (page == "Market") {
    return (
      <>
        <NavBar
          data={account}
          status={isConnected}
          connect={connectToMetamask}
          Market={Market}
          MyNFT={MyNFT}
        />
        <MarketPage allitems={fetchMarketplace} />
      </>
    );
  } else if (page == "MyNFT") {
    return (
      <>
        <NavBar
          data={account}
          status={isConnected}
          connect={connectToMetamask}
          MyNFT={MyNFT}
          Market={Market}
        />
        <MarketPage allitems={fetchMarketplace} />
      </>
    );
  } else {
    return (
      <>
        <NavBar
          data={account}
          status={isConnected}
          connect={connectToMetamask}
          MyNFT={MyNFT}
          Market={Market}
        />
        <div className="mt-12">
          <div className="container wrapper bg-teal-500">
            <form className="flex flex-col gap-10 items-center mt-4">
              <h1 className="text-3xl font-bold">Create NFT</h1>
              <label>
                Title :{" "}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setNmae(e.target.value)}
                />
              </label>
              <label>
                Image Link :{" "}
                <input
                  type="text"
                  name="link"
                  value={name}
                  onChange={(e) => setNmae(e.target.value)}
                />
              </label>
              <label>
                Description :{" "}
                <input
                  type="text"
                  name="description"
                  value={name}
                  onChange={(e) => setNmae(e.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default App;
