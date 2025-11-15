import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ListProducts() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProducts;