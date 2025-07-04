import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import { useState } from "react";
import Card from "../components/card";

export default function MyNFT(props) {
  const [Items, setItems] = useState(props.allitems);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between wrapper py-4">
        {Items.map((item, i) => {
          return (
            <Card
              item={item}
              text="sell"
              onClick={() => {
                var allitems = Items;
                allitems.splice(item.id, 1);
                setItems(allitems);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
