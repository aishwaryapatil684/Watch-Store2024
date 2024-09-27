// src/components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, addToCart } from '../redux/productSlice'; // Adjust path as necessary
import watch1 from '../images/w1.jpg';
import watch2 from '../images/w2.jpg';
import watch3 from '../images/w3.jpg';
import watch4 from '../images/w4.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    const fetchProducts = () => {
      const staticWatches = [
        { id: 1, name: 'Watch 1', image: watch1, price: 50 },
        { id: 2, name: 'Watch 2', image: watch2, price: 60 },
        { id: 3, name: 'Watch 3', image: watch3, price: 70 },
        { id: 4, name: 'Watch 4', image: watch4, price: 80 },
      ];
      dispatch(setProducts(staticWatches));
    };

    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (watch) => {
    dispatch(addToCart(watch));
  };

  return (
    <div style={homeStyle}>
      <h2>Watches</h2>
      <div style={watchGridStyle}>
        {products.length > 0 ? (
          products.map((watch) => (
            <div key={watch.id} style={watchCardStyle}>
              <h3>{watch.name}</h3>
              <img src={watch.image} alt={watch.name} style={imageStyle} />
              <p>${watch.price}</p>
              <button onClick={() => handleAddToCart(watch)} style={buttonStyle}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

const homeStyle = {
  padding: '20px',
};

const watchGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
};

const watchCardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  textAlign: 'center',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
};

export default Home;
