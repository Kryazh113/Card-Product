import React from "react";
import { product } from "../mock";

function Gallery() {
  return (
    <div>
      <img width="200" height="200" src={product.src} alt={product.name} />
    </div>
  );
}

export default Gallery;
