// import { useState } from "react";
import "./App.css";
import { CartProvider } from "./components/CartProvider";
import { ProductItemList } from "./components/ProductItemList";

function App() {
  return (
    <CartProvider>
      <ProductItemList />
    </CartProvider>
  );
}

export default App;
