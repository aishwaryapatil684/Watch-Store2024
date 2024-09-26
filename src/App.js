import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin" component={Admin} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
