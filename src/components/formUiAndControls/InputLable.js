import React from "react";

const InputLable = ({ className, htmlFor, label }) => {
  return (
    <label
      className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default InputLable;
