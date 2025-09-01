import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <span className="ml-4 text-lg font-medium text-gray-700">Loading...</span>
    </div>
  );
};

export default Loading; 