import React from 'react';

const Alert = ({ message, type = 'error' }) => {
  const bg = type === 'error' ? '#f8d7da' : '#d1e7dd';
  const color = type === 'error' ? '#842029' : '#0f5132';
  return (
    <div style={{ backgroundColor: bg, color, padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      {message}
    </div>
  );
};

export default Alert;
