import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function layout() {
  return (
    <div>
      <Navbar />

      <Outlet />
      {/* here we add the content  */}
      <Footer />
    </div>
  );
}

export default layout;
