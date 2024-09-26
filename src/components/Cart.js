import React from 'react';

const Cart = () => {
  return (
    <div style={cartStyle}>
      <h2>Your Cart</h2>
      <p>No items in your cart.</p>
    </div>
  );
};

const cartStyle = {
  padding: '20px',
};

export default Cart;
