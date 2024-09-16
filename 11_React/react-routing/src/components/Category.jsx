import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleClick = () => {
    //more work and logic
    navigate("/products");
  };

  useEffect(() => {
    console.log("🚀 ~ file: Category.jsx ~", location);
    console.log("params are", params);
  }, []);

  return (
    <div className="flex justify-center items-center  mt-12 flex-col">
      <p className="text-2xl font-bold">Category</p>

      <p>params are {params.name}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6"
      >
        Move to Products
      </button>
    </div>
  );
}

export default Category;
