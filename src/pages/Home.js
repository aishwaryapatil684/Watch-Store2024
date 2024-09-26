import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import watch1 from '../images/w1.jpg';
import watch2 from '../images/w2.jpg';
import watch3 from '../images/w3.jpg';
import watch4 from '../images/w4.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Retrieve products from Redux store

  useEffect(() => {
    // If you want to fetch products from an API or any other source
    const fetchProducts = async () => {
      // Example of fetching from an API
      // const response = await axios.get('/api/products'); 
      // dispatch({ type: 'SET_PRODUCTS', payload: response.data });

      // For now, we will use the static watch images
      const staticWatches = [
        { id: 1, name: 'Watch 1', image: watch1, price: 50 },
        { id: 2, name: 'Watch 2', image: watch2, price: 60 },
        { id: 3, name: 'Watch 3', image: watch3, price: 70 },
        { id: 4, name: 'Watch 4', image: watch4, price: 80 },
      ];
      dispatch({ type: 'SET_PRODUCTS', payload: staticWatches }); // Dispatch static watches to store
    };

    fetchProducts();
  }, [dispatch]);

  const addToCart = (watch) => {
    dispatch({ type: 'ADD_TO_CART', payload: watch });
  };

  return (
    <div style={homeStyle}>
      <h2>Watches</h2>
      <div style={watchGridStyle}>
        {products.map((watch) => ( // Use products from Redux store
          <div key={watch.id} style={watchCardStyle}>
            <h3>{watch.name}</h3>
            <img src={watch.image} alt={watch.name} style={imageStyle} />
            <p>${watch.price}</p>
            <button onClick={() => addToCart(watch)} style={buttonStyle}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const homeStyle = {
  padding: '20px',
};

const watchGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
  gap: '20px', // Space between items
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
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
};

export default Home;
