import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import MySpinner from "./MySpinner";
import getProduct from "../services/productServices/getProduct";
import useFetch from "../services/productServices/useFetch";
function Products() {
  let auth = true;
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const productsUrl = "https://dummyjson.com/products";

  const { data, loading } = useFetch(productsUrl);
  const products = data && data.products;

  if (!auth) {
    // navigate("/login");
    return <Navigate to="/login" />;
  }

  const filteredProducts = products
    ? products.filter((product) => product.category === category)
    : [];

  return (
    <div>
      {/* beauty, fragnances, groceries, furniture */}
      <p className="text-2xl font-bold text-center mt-4">Select Category</p>
      <select
        name="category"
        id="category"
        className="mt-4 ml-4 text-xl font-bold text-center m-auto"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragnances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
      </select>
      {console.log("filtered products", filteredProducts)}
      {loading ? (
        <MySpinner className="h-16 w-16 text-gray-900/50" />
      ) : (
        <>
          <p className="text-2xl font-bold text-center mt-4">Products</p>
          <div className="flex justify-center items-center  mt-12">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {filteredProducts.length > 0
                ? filteredProducts &&
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Products;
