
import React from 'react';

function Loader() {
  return (
    <div className="text-center py-10">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
