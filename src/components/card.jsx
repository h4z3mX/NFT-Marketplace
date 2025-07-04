import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="container">
        <div className="nftImage">
          <img src={props.image} alt="" />
        </div>
        <div className="data flex flex-row justify-between items-center">
          <div className="left">
            <div className="fw-bold fs-lg"> Owner : {props.owner}</div>
            <div className="fw-light fs-md"> Address : {props.address}</div>
          </div>
          <div className="right">
            <div className="fw-bold fs-lg"> Price : {props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
