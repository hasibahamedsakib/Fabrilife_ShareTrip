import React from "react";

const ErrorComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-red-600">Error</h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Error loading products. Please try again later.
        </p>
        <p className="text-lg lg:text-xl text-gray-700">Thank you!</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
