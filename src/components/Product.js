import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div style={productCardStyle}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} style={buttonStyle}>
        Add to Cart
      </button>
    </div>
  );
};

const productCardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  textAlign: 'center',
  width: '200px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
};

export default Product;
