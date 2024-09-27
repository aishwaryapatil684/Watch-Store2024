import React from 'react';
import {  Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} /> {/* Ensure you have a Cart component */}
    </Routes>
  );
};

export default App;
