import React from "react";
import OldPrice from "./old-price";
import Price from "./price";
import { PriceWrapper } from "./styled";
import { P } from "/src/elements";

function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price < oldPrice;
  return (
    <PriceWrapper>
      <P>Цена:</P>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={price} />
    </PriceWrapper>
  );
}

export default FullPrice;
