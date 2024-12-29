import React from "react";

const PreLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-success h-32 w-32"></div>
    </div>
  );
};

export default PreLoader;
