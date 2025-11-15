import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import ListProducts from "./components/ListProducts";
import DrawerCard from "./components/DrawerCard";

function App() {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer =() => setDrawerOpen(true);
  const closeDrawer =() => setDrawerOpen(false);

  useEffect(() => {
    const storedCard = localStorage.getItem("cart");
    if (storedCard) setCart(JSON.parse(storedCard));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      <Header
       cardCount={cart.reduce((sum, p) => sum + p.quantity, 0)}
      openDrawer = {openDrawer} />

      <DrawerCard 
      isOpen={isDrawerOpen}
      closeDrawer={closeDrawer}
      cart={cart} />

      <ListProducts onAddProduct={onAddProduct} />
    </div>
  );
}

export default App;
