import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    //navbar styled with tailwindcss
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative
       shadow-lg font-mono gap-3
       "
      role="navigation"
    >
      <a href="/" className="pl-8 font-semibold text-xl">
        Logo
      </a>
      <div className="pr-8 md:block hidden">
        <Link to="/category" className="p-4 font-semibold text-lg">
          {" "}
          Category{" "}
        </Link>
        <Link to="/products" className="p-4 font-semibold text-lg">
          Products
        </Link>
        <Link href="/login" className="p-4 font-semibold text-lg">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
