import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "../styles/ListPro.css";

function ListProducts({ onAddProduct, products }) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddProduct={onAddProduct}
        />
      ))}
    </div>
  );
}

export default ListProducts;
