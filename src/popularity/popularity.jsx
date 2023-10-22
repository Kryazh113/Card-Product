import React from "react";

function Popularity({ count }) {
  let result = null;

  if (count === 0) {
    result = <p>Будь первым. Поделись впечатлением.</p>;
  }
  if (count >= 3) {
    result = <p style={{ color: "green" }}>Проверенный товар</p>;
  }
  return result;
}
export default Popularity;
