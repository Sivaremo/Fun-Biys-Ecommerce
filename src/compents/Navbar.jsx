import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  // Check if cartItems is defined before accessing its length property
  const cartItemsLength = cartItems ? cartItems.length : 0;
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to='/'>
            <div className="d-flex">
              <h4 className='fw-bold fun text-danger'>F</h4>
              <h4 className='fw-bold fun text-primary'>U</h4>
              <h4 className='pe-2 fw-bold fun text-success'>N</h4>
              <br />
              <h4 className='fw-bold fun text-info'>B</h4>
              <h4 className='fw-bold fun'>O</h4>
              <h4 className='fw-bold fun text-warning'>Y</h4>
              <h4 className='fw-bold fun text-success'>S</h4>
            </div>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>Products</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to={"/login"} className='btn btn-outline-dark me-2'><i className='fa fa-sign-in'></i> Login</NavLink>
              <NavLink to={'/register'} className='btn btn-outline-dark me-2'><i className='fa fa-plus '></i> Register</NavLink>
              <NavLink to="/cart" className='btn btn-outline-dark me-2'><i className='fa fa-sign-in '></i> Cart ({cartItemsLength})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
