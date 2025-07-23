import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 h-[320px] flex flex-col justify-between"
    >
      <div className="flex items-center justify-center h-40">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">{product.title}</h2>
        <p className="text-center text-indigo-600 font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
