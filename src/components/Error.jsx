import React from 'react';

function Error() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="mt-4 text-xl text-pink-500">Oops! Page Not Found</p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-2 text-white border rounded shadow-md"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;