/// src/components/Home.js
// src/components/Home.js
// src/components/Home.js
// src/components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, addToCart } from '../redux/productSlice'; // Adjust path as necessary
import { useNavigate } from 'react-router-dom';
import watch1 from '../images/w1.jpg';
import watch2 from '../images/w2.jpg';
import watch3 from '../images/w3.jpg';
import watch4 from '../images/w4.jpg';
import watch5 from '../images/w5.jpeg';
import watch6 from '../images/w6.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const cartCount = useSelector((state) => state.products.cart.length);

  useEffect(() => {
    const fetchProducts = () => {
      const staticWatches = [
        { id: 1, name: 'Watch 1', image: watch1, price: 50 },
        { id: 2, name: 'Watch 2', image: watch2, price: 60 },
        { id: 3, name: 'Watch 3', image: watch3, price: 70 },
        { id: 4, name: 'Watch 4', image: watch4, price: 80 },
        { id: 5, name: 'Watch 5', image: watch5, price: 90 },
        { id: 6, name: 'Watch 6', image: watch6, price: 100 },

      ];
      dispatch(setProducts(staticWatches));
    };

    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (watch) => {
    dispatch(addToCart(watch));
  };

  const handleBuyNow = (watch) => {
    alert(`Buying ${watch.name} for $${watch.price}`);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div style={homeStyle}>
      <div style={headerStyle}>
        <h1 style={headingStyle}>Watch Store</h1>
        <div style={cartIconStyle} onClick={handleCartClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" style={{ cursor: 'pointer' }}>
            <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H14l-1.5 6H6l-.803-1.5H1a.5.5 0 0 1 0-1h3.486L4.5 1.5A.5.5 0 0 1 5 1h6a.5.5 0 0 1 .5.5v.5H12.5a.5.5 0 0 1-.5-.5V1h-5v.5a.5.5 0 0 1-1 0V1H3a.5.5 0 0 1 0-1h1.5V.5a.5.5 0 0 1 .5-.5zM4.5 6h6l1.5 6H6l-1.5-6zm0 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
          <span style={cartCountStyle}>{cartCount}</span>
        </div>
      </div>
      <div style={watchGridStyle}>
        {products.length > 0 ? (
          products.map((watch) => (
            <div key={watch.id} style={watchCardStyle}>
              <h3>{watch.name}</h3>
              <img src={watch.image} alt={watch.name} style={imageStyle} />
              <p>${watch.price}</p>
              <div style={buttonContainerStyle}>
                <button onClick={() => handleAddToCart(watch)} style={buttonStyle}>
                  Add to Cart
                </button>
                <button onClick={() => handleBuyNow(watch)} style={buyButtonStyle}>
                  Buy
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Watch Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

const homeStyle = {
  padding: '20px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '0',
  backgroundColor: '#f8f9fa',
  padding: '10px 0',
};

const cartIconStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const cartCountStyle = {
  marginLeft: '5px',
  fontWeight: 'bold',
};

const watchGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Three columns
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
  marginRight: '10px',
};

const buyButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const footerStyle = {
  marginTop: '20px',
  textAlign: 'center',
  borderTop: '1px solid #ccc',
  paddingTop: '10px',
};

export default Home;
