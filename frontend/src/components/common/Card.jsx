import React from 'react';

const Card = ({ children, className = '', padding = 'p-8' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;