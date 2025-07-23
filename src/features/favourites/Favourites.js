import React from 'react';
import { useSelector } from 'react-redux';

function Favourites() {
  const favourites = useSelector((state) => state.favourites.items);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">My Favourites</h1>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-600">You haven't added any favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-full"
            >
              <div
                onClick={() => window.location.href = `/product/${product.id}`}
                className="cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mx-auto mb-3"
                />
                <h2 className="text-sm font-semibold text-gray-800 h-12 overflow-hidden text-center">
                  {product.title}
                </h2>
                <p className="text-center font-bold text-indigo-600 mt-2">${product.price}</p>
              </div>

              <button
                onClick={() => alert(`You bought: ${product.title}`)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
