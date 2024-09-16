import React from "react";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">404 - Page Not Found</h1>
      <p className="mt-4 text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 underline mt-4 block">
        Go back to the homepage
      </a>
    </div>
  );
}

export default NotFound;
