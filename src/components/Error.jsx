import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-4">404</h1>
        <p className="text-center mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
