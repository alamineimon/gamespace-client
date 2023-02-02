import React from "react";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl lg:text-9xl font-gaming font-bold">404</h1>
      <h3 className="text-xl capitalize text-white">Page not found</h3>
      <Link
        to="/"
        className="btn btn-circle mt-4 hover:bg-primary hover:text-white "
      >
        <button>Go Back</button>
      </Link>
    </section>
  );
};

export default Error404Page;
