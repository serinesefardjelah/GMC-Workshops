import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Category from "./components/Category";
import Login from "./components/Login";
import Layout from "./layouts/layout";
import User from "./components/User";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        {/* use layout to render routes */}

        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="login" element={<Login />}>
            <Route path="profile" element={<User />} />
          </Route>
        </Route>

        <Route path="/main" element={<h1>jsx with no layout</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
