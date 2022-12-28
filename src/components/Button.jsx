import React from 'react';

const Button = ({ onClick, type, children }) => (
  <button type={type} onClick={onClick} className="min-w-min py-2 px-4 bg-primary rounded">
    {children}
  </button>
);

export { Button };
