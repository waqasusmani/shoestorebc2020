import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Launch from './components/Launch';
import LaunchShoe from './components/LaunchShoe';
import LaunchIndex from './components/LaunchIndex';
import Cart from './components/Cart';



var cart = [];

function App() {
  return (
    <div>
      <Router>
        <div className="nav-bar">
          <Link to='/' className="home">Home </Link>
          <Link to='product' className="product">Products</Link>
          <Link to='cart' className="myCart">Show Cart</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='product' element={<Launch />}>
            <Route path='/' element={<LaunchIndex />}></Route>
            <Route path=":slug" element={<LaunchShoe />}></Route>
          </Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}












export default App;
