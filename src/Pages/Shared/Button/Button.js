import React from 'react';
import './Button.css';

const Button = ({name}) => {
    return (
      <div>
        <button className="text-white button-common font-medium uppercase text-base">
         {name}
        </button>
      </div>
    );
};

export default Button;