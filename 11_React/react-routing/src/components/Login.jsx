import React from "react";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center  mt-12">
      <p className="text-2xl font-bold">Login</p>
      <Outlet />
    </div>
  );
}

export default Login;
