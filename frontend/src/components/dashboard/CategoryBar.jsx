import React from 'react';

const CategoryBar = ({ category, value, count, percentage }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 capitalize font-medium">{category}</span>
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 font-semibold">
            ${value.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm">
            ({count} item{count !== 1 ? 's' : ''})
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gray-900 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CategoryBar;