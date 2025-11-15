import React, { useState } from "react";
import Header from "./Layout/Header";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <div>
      <Header />
      <ListProducts/>
    </div>
  );
}

export default App;
