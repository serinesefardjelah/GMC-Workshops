import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
// import { Spinner } from "@material-tailwind/react";
import MySpinner from "./MySpinner";
import getProduct from "../services/productServices/getProduct";
function Products() {
  let auth = true;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("beauty");
  const productsUrl = "https://dummyjson.com/products";

  useEffect(() => {
    getProduct(productsUrl).then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  if (!auth) {
    // navigate("/login");
    return <Navigate to="/login" />;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

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
              {filteredProducts &&
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              {console.log("type of products", typeof products)}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Products;
