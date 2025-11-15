import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      {product.urlImage ? (
        <img src={product.urlImage} alt={product.name} />
      ) : (
        <span>Sin img</span>
      )}

      <h3>{product.marca}</h3>
      <p>{product.name}</p>
      <p>{product.description}</p>

      <p>{product.stock > 0 ? `Stock: ${product.stock}` : "sin stock}"}</p>
      <button disabled={product.stock === 0}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;
