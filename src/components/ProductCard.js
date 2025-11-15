import React from "react";
import ProCard from "../styles/ProCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        {product.urlImage ? (
          <img src={product.urlImage} alt={product.name} />
        ) : (
          <span>Sin img</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-brand">{product.marca}</h3>
        <p className="product-name">{product.name}</p>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <p className="product-price">${product.price}</p>

        <p
          className={`product-stock ${
            product.stock > 0 ? "Disponible" : "Agotado"
          }`}
        >
          {product.stock > 0 ? `Stock: ${product.stock}` : "Sin stock"}
        </p>
        <button disabled={product.stock === 0}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
