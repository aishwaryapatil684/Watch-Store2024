// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [],
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { setProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;
