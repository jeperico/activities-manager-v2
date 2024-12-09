import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  hoverColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  bgColor = "bg-sesi",
  hoverColor = "hover:bg-blue-900",
}) => {
  return (
    <button
      className={`mt-4 w-full ${bgColor} ${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
}

export default Button;
