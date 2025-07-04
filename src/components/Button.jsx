import React from "react";
import { Link } from "react-router-dom";
import Market from "../pages/market";
export default function Button(props) {
  return (
    <>
      {props.link ? (
        <Link className={"button " + props.className} to="Market">
          {props.children}
        </Link>
      ) : (
        <button className={"button " + props.className} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  );
}
