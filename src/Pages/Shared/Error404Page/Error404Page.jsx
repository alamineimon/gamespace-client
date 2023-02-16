import React from "react";
import { Link } from "react-router-dom";
import './Error404Page.css'

const Error404Page = () => {
  return (
    <div className='errorPage'>
      <section className=" flex items-center h-screen p-10 md:p-16  text-gray-100">
        <div className="container flex flex-col items-center justify-center mx-auto my-8">
          <div className="w-full md:max-w-xl text-center m-auto">
            <h2 className="mb-8 font-extrabold text-7xl md:text-9xl">AFK <span className="text-xl md:text-2xl">404</span></h2>
            <p className="text-4xl font-bold md:text-5xl">Go Back to the shadow!</p>
            <p className="mt-4 mb-8">The Page You looking for on longer exists. Perhaps yoy can return back to the site's homepage and see if you canfind what you are looking for</p>
            <button>
              <Link rel="noopener noreferrer" to="/" className="px-8 border border-yellow-500 hover:bg-yellow-500 py-3 font-semibold rounded ">Go Back</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404Page;
