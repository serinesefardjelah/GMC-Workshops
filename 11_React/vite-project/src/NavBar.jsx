import React from "react";
import { Link } from "react-router-dom";

//rfce

function NavBar() {
  //navbar styled with tailwind css
  return (
    <div>
      <nav
        className="flex justify-between items-center h-16 bg-gray-400 text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <a href="/" className="pl-8">
          Logo
        </a>
        <div className="pr-8 md:block hidden">
          <a href="/" className="p-4">
            Home
          </a>
          <a href="/" className="p-4">
            Services
          </a>
          <a href="/" className="p-4">
            About us
          </a>
          <a href="/" className="p-4">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
