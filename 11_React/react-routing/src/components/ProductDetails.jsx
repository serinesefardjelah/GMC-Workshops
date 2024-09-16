import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getProduct from "../services/productServices/getProduct";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();
  const singleProductUrl = `https://dummyjson.com/products/${params.id}`;

  useEffect(() => {
    getProduct(singleProductUrl).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <p>Product details</p>
      <div>id is {params.id}</div>
      <div>
        {product && (
          <div>
            <div>
              <img src={product.thumbnail} alt="product" />
            </div>
            <div>
              <div>{product.title}</div>
              <div>{product.price}</div>
              <div>{product.category}</div>
              <div>{product.description}</div>
              <div>{product.rating}</div>
              <div>{product.stock}</div>
              <div>{product.brand}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
