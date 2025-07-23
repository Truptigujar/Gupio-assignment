import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from './productsSlice';
import { toggleFavourite } from '../favourites/favouritesSlice';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const favourites = useSelector((state) => state.favourites.items);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const isFavourite = favourites.some((item) => item.id === product?.id);

  const handleToggleFavourite = () => {
    if (product) dispatch(toggleFavourite(product));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img src={product.image} alt={product.title} className="h-64 mx-auto object-contain" />
      <h1 className="text-xl font-bold my-2">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="font-bold mt-2 text-lg">${product.price}</p>
      <button
        onClick={handleToggleFavourite}
        className={`mt-4 px-4 py-2 rounded text-white ${isFavourite ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    </div>
  );
}

export default ProductDetail;

