import React from "react";

const Button = ({onClick, type,  children}) => {
  return (
    <button type={type} onClick={onClick} className="min-w-min py-2 px-4 bg-primary rounded py-2">
    {children}
    </button>
  );
};

export { Button };
