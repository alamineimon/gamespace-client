import React from "react";
// import "./Field.css";

const Button = ({ value, onClick }) => {
  return (
    <button
      className="h-full w-full border border-white hover:bg-white/10 relative"
      onClick={onClick}
    >
      <p className="text-4xl text-primary absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        {value}
      </p>
    </button>
  );
};

export default Button;
