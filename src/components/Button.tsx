import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full bg-sesi hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
}

export default Button;
