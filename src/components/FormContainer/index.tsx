'use client'

import React from "react";
import { StaticImageData } from 'next/image';

interface IFormAreaProps {
  children: React.ReactNode;
  onSubmit: (e: any) => void;
  backgroundImage: string | StaticImageData;
  headerHeight: number;
}

const FormArea: React.FC<IFormAreaProps> = ({
  children,
  onSubmit,
  backgroundImage,
  headerHeight = 0,
}) => {
  const style = {
    height: `calc(100vh - ${headerHeight}px)`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <main className="flex justify-center items-center w-screen" style={style}>
      <form className="bg-white p-8 rounded shadow w-full max-w-sm" onSubmit={onSubmit}>
        {children}
      </form>
    </main>
  );
};

export default FormArea;