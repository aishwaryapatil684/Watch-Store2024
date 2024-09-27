// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Adjust path as necessary

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
