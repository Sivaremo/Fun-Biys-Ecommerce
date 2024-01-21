import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './compents/Navbar';
import Home from './compents/Home';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import "https://checkout.razorpay.com/v1/checkout.js"

function App() {
  return (
    <div className="App">
      
       <Home/>
      
    </div>
  );
}

export default App;
