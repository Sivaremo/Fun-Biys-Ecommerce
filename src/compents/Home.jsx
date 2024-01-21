import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Productsdetails from './Productsdetails';
import Cart from './Cart';
import Footer from './Footer';
import MainPage from './MainPage';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';

const Home = () => {
  const location = useLocation();

  // List of routes where Navbar should be displayed
  const showNavbarRoutes = ['/','/products', '/products/:id', '/cart'];

  // Check if the current route should display Navbar
  const showNavbar = showNavbarRoutes.some(route => location.pathname.includes(route));

  // Exclude login and register routes from displaying the Navbar
  const excludeNavbarRoutes = ['/login', '/register'];
  const shouldExcludeNavbar = excludeNavbarRoutes.some(route => location.pathname === route);

  useEffect(() => {
    document.title = 'Fun boys- Ecommerce';
  }, []);

  return (
    <div>
      {!shouldExcludeNavbar && showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productsdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      {!shouldExcludeNavbar && showNavbar && <Footer />}
    </div>
  );
};

export default Home;
