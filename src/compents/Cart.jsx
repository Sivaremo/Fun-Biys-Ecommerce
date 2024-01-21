import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Check if state is undefined or has no length property
  if (!state || !state.length) {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const handleIncrement = (item) => {
    // Dispatch an action to increase the quantity
    // Assuming you have an action type like 'INCREMENT_ITEM'
    dispatch({ type: 'INCREMENT_ITEM', payload: { id: item.id } });
  };

  const handleDecrement = (item) => {
    // Dispatch an action to decrease the quantity
    // Assuming you have an action type like 'DECREMENT_ITEM'
    dispatch({ type: 'DECREMENT_ITEM', payload: { id: item.id } });
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold"> ₹ {parseInt(cartItem.price * 84*cartItem.qty)}</p>
            </div>
            <div className="col-md-2">
                <p className="fw-bold text-center">Quality</p>
              <div className="d-flex justify-content-between">
                <button onClick={() => handleDecrement(cartItem)} className="btn btn-outline-secondary">
                  -
                </button>
                <input type="number" name="" id="" className='form-control text-center ' value={cartItem.qty} readOnly />
                <button onClick={() => handleIncrement(cartItem)} className="btn btn-outline-secondary">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const calculateTotalAmount = () => {
    return state.reduce((total, cartItem) => total + cartItem.price * 84 * cartItem.qty, 0);
  };

  const calculateTotalQuantity = () => {
    return state.reduce((total, cartItem) => total + cartItem.qty, 0);
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/payment" className="btn btn-outline-primary mb-5 w-25 mx-auto">
            Proceed To Checkout
          </NavLink>
        </div>
        <div className="row fw-bold">
          <p>Total Items: {calculateTotalQuantity()}</p>
          <p>Total Amount:  ₹ {parseInt(calculateTotalAmount())}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {state && state.length === 0 && emptyCart()}
      {state && state.length !== 0 && state.map(cartItems)}
      {state && state.length !== 0 && button()}
    </>
  );
};

export default Cart;
