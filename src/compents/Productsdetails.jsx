import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';

export default function Productsdetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addproduct=(product)=>{
    dispatch(addItem(product));
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);

        // Update document title with the product title
        document.title = `${productData.title}`;

      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const Loading = () => {
    return (
        <Fragment>
        <div className="col-md-6 mt-5">
          <ContentLoader
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="0" ry="0" width="400" height="400" />
          </ContentLoader>
        </div>
        <div className="col-md-6 mt-5" style={{ lineHeight: 2 }}>
          <ContentLoader
            speed={2}
            width={300}
            height={300}
            viewBox="0 0 300 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="0" ry="0" width="300" height="50" />
            <rect x="0" y="75" rx="0" ry="0" width="300" height="75" />
            <rect x="0" y="175" rx="0" ry="0" width="150" height="25" />
            <rect x="0" y="225" rx="0" ry="0" width="300" height="50" />
            <rect x="0" y="375" rx="0" ry="0" width="100" height="50" />
            <rect x="106" y="375" rx="0" ry="0" width="100" height="50" />
          </ContentLoader>
        </div>
      </Fragment>
    );
  };

  const Showproducts = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img src={product.image} alt={product.title} height={'400px'} width={'400px'} />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className='text-uppercase text-black-50 men'>
            {product.category}
          </h4>
          <h1 className="display-5">
            {product.title}
          </h1>
          <p className='lead fw-bold'>
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star text-warning"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            ₹{parseInt(product.price * 84)}
          </h3>
          <p className="lead">
            {product.description}
          </p>
          <button className="btn btn-outline-dark me-2" onClick={()=>addproduct(product)}>
            Add cart
          </button>
          <NavLink to={'/cart'} className='btn btn-primary me-2'   onClick={()=>addproduct(product)}>
            Buy Now
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <Showproducts />}
        </div>
      </div>
    </div>
  );
}
