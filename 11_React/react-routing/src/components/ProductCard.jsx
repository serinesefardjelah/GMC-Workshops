import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product: { id, title, price, thumbnail, category } }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  //style the product card with tailwindcss
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={() => handleClick(id)}
    >
      <img src={thumbnail} alt="product" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Category: {category}</p>
        <p className="text-gray-700 text-base">Price: {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
