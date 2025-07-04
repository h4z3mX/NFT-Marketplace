import logo from "../logo.svg";
import Button from "./Button";
import React from "react";

export default function NavBar(Props) {
  return (
    <>
      <div className="navbar">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" width={70} />
          <div className="text-xl font-bold">NFT MarketPlace</div>
          {Props.status ? (
            <div className="flex items-center ">
              <Button className="me-4" onClick={Props.Market}>
                Market
              </Button>
              <Button onClick={Props.MyNFT}>My NFT</Button>
              <div className="text">{Props.data}</div>
            </div>
          ) : (
            <Button
              onClick={() => {
                Props.connect();
              }}
            >
              Connect
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
