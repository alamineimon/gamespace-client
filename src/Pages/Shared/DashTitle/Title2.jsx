import React from "react";

const Title2 = ({ children, color }) => {
  return (
    <h1 className="text-lg lg:text-3xl font-bold capitalize mb-5 text-center">
      {children} <span className="text-primary">{color}</span>
    </h1>
  );
};

export default Title2;
