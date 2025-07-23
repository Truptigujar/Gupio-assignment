import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import favouritesReducer from '../features/favourites/favouritesSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritesReducer,
    auth: authReducer,
  },
});
