import React from 'react';

const StatsCard = ({ label, value, loading = false }) => {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded w-16"></div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-4xl font-semibold text-gray-900">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;