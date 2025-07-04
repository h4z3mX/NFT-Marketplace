import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import { useState } from "react";
import Card from "../components/card";

export default function MarketPage(props) {
  const [Items, setItems] = useState(props.items);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-between wrapper py-4">
        {Items.map((item, i) => {
          return (
            <Card
              item={item}
              onClick={() => {
                var allitems = Items;
                allitems.splice(item.id, 1);
                setItems(allitems);
              }}
              text="Buy"
            />
          );
        })}
      </div>
    </>
  );
}
