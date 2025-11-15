import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "../styles/ListPro.css";

function ListProducts() {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProducts;