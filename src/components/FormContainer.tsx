import React from "react";

const FormArea = ({ children, backgroundImage, headerHeight, onBubmit }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `calc(100vh - ${headerHeight}px)`,
  }

  return (
    <main className="flex justify-center items-center w-screen" style={style}>
      <form className="bg-white p-8 rounded shadow w-full max-w-sm" onSubmit={onBubmit}>
        {children}
      </form>
    </main>
  );
};

export default FormArea;