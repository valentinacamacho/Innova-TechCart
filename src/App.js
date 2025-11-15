import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";
import ListProducts from "./components/ListProducts";
import DrawerCard from "./components/DrawerCard";
import { products as productsData } from "./data/products";


function App() {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
const [products, setProducts] = useState(productsData);


  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const storedCard = localStorage.getItem("cart");
    if (storedCard) setCart(JSON.parse(storedCard));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onAddProduct = (product) => {
    if (product.stock <= 0) return;

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

    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, stock: p.stock - 1 } : p))
    );
  };

  const onRemoveProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  const increQuantityPro = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item
      )
    );
  };

  const decreQuantityPro = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAcum = cart.reduce((totalAcum, item) => {
    return totalAcum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <Header
        cardCount={cart.reduce((sum, p) => sum + p.quantity, 0)}
        openDrawer={openDrawer}
      />

      <DrawerCard
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        cart={cart}
        onRemoveProduct={onRemoveProduct}
        increQuantityPro={increQuantityPro}
        decreQuantityPro={decreQuantityPro}
      />

      <ListProducts products={products} onAddProduct={onAddProduct} />
    </div>
  );
}

export default App;
