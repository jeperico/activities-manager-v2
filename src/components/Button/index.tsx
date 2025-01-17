"use client";

import Link from "next/link";
import React from "react";

type Theme = "sesi" | "green" | "red" | "yellow";

interface IButtonProps {
  children: React.ReactNode;
  theme: Theme;
  onClick?: () => void;
  link?: string;
  cn?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  theme,
  onClick,
  link,
  cn,
}) => {
  let bgColor = "";
  let hoverColor = "";

  switch (theme) {
    case "sesi":
      bgColor = "bg-sesi";
      hoverColor = "bg-sesi-dark";
      break;
    case "green":
      bgColor = "bg-green-500";
      hoverColor = "bg-green-700";
      break;
    case "red":
      bgColor = "bg-red-500";
      hoverColor = "bg-red-700";
      break;
    case "yellow":
      bgColor = "bg-yellow-500";
      hoverColor = "bg-yellow-700";
      break;
  }

  return (
    <>
      {link ? (
        <Link href={link}>
          <button
            className={`${cn} ${bgColor} ${
              "hover:" + hoverColor
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={`${cn} ${bgColor} ${
            "hover:" + hoverColor
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
