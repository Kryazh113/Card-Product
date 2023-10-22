import React from "react";
import Button from "/src/button/button";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <div>
      {text}
      <Button onClick={onShowMore}>
        {isShowAllDescription ? "Скрыть" : "Подробнее"}
      </Button>
    </div>
  );
}
export default Description;
