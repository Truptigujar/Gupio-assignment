import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from './productsAPI';

const initialState = {
  items: [],
  selectedProduct: null,
  status: 'idle',
};

export const getProducts = createAsyncThunk('products/fetchAll', fetchProducts);
export const getProductById = createAsyncThunk('products/fetchById', fetchProductById);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export default productsSlice.reducer;

