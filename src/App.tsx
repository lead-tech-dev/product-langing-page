import React from "react";
import Header from "./containers/header";
import { ProductProvider } from "./context/productProvider";
import Product from "./pages/product";

function App() {
  return (
    <ProductProvider>
      <div className="wrapper">
        <Header />
        <Product />
      </div>
    </ProductProvider>
  );
}

export default App;
