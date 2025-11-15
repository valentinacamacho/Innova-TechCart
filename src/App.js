import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import ListProducts from "./components/ListProducts";

function App() {
  const [card, setCart] = useState([]);
  useEffect(() => {
    const storedCard = localStorage.getItem("card");
    if (storedCard) setCart(JSON.parse(storedCard));
  }, []);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const onAddProduct = (product) => {
    setCart((prevCart) => {
      const productExist = prevCart.find((p) => p.id === product.id);
      if (productExist) {
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: Math.min(p.quantity + 1, product.stock) }
            : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div>
      <Header cardCount={card.reduce((sum, p) => sum + p.quantity, 0)} />
      <ListProducts onAddProduct={onAddProduct} />
    </div>
  );
}

export default App;
