'use client'

import React from "react";
import Link from "next/link";

type Theme = 'sesi' | 'green' | 'red' | 'yellow';

interface IButtonProps {
  children: React.ReactNode;
  theme: Theme;
  link?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  theme,
  link,
}) => {
  let bgColor = '';
  let hoverColor = '';

  switch (theme) {
    case 'sesi':
      bgColor = 'bg-sesi';
      hoverColor = 'bg-sesi-dark';
      break;
    case 'green':
      bgColor = 'bg-green-500';
      hoverColor = 'bg-green-700';
      break;
    case 'red':
      bgColor = 'bg-red-500';
      hoverColor = 'bg-red-700';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-500';
      hoverColor = 'bg-yellow-700';
      break;
  }

  return (
    <>
      {link ? (
        <Link href={link} className="">
          <button
            className={`w-full ${bgColor} ${'hover:' + hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
            className={`mt-4 w-full ${bgColor} ${'hover:' + hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
