import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addItem } from '../redux/action';


export default function
  () {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState([data]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
 
  let compountmounted = true;
  const dispatch = useDispatch();
  const addproduct=(product)=>{
    dispatch(addItem(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (compountmounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        compountmounted = false;
      }
    }
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
      <div className='col-md-3'>
        <ContentLoader
          speed={2}
          width={300}
          height={350}
          viewBox="0 0 300 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
         
          <rect x="0" y="0" rx="0" ry="0" width="300" height="350" />
        </ContentLoader>
      </div>
      <div className='col-md-3'>
        <ContentLoader
          speed={2}
          width={300}
          height={350}
          viewBox="0 0 300 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
         
          <rect x="0" y="0" rx="0" ry="0" width="300" height="350" />
        </ContentLoader>
      </div>
      <div className='col-md-3'>
        <ContentLoader
          speed={2}
          width={300}
          height={350}
          viewBox="0 0 300 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
         
          <rect x="0" y="0" rx="0" ry="0" width="300" height="350" />
        </ContentLoader>
      </div>
      <div className='col-md-3'>
        <ContentLoader
          speed={2}
          width={300}
          height={350}
          viewBox="0 0 300 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
         
          <rect x="0" y="0" rx="0" ry="0" width="300" height="350" />
        </ContentLoader>
      </div>
      </>
    )
  }
  const filterproducts=(cat)=>{
    const updated=data.filter((x)=>x.category == cat);
    setfilter(updated);
  }
  
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredProducts = data.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    setfilter(filteredProducts);
  };

  const Showproducts = () => {
    return (
      <>
    
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2 " onClick={()=>setfilter(data)}>All
          </button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>filterproducts("men's clothing")}>Men's Clothing
          </button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>filterproducts("women's clothing")}>Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>filterproducts("jewelery")}>Jewelery
          </button>
          <button className="btn btn-outline-dark me-2"  onClick={()=>filterproducts("electronics")}>Electronic
          </button>

        </div>
        {filter.map((product => {
          return (

            <div className="custom-card col-md-3 col-sm-6 mb-4">
               <div class="card h-100 text-center p-4"key={product.id} >
              <img src={product.image} class="card-img-top" alt={product.title} height={'250px'} />
              <div class="card-body">
                <h5 class="card-title mb-0">
                {product.title && product.title.length > 12
            ? `${product.title.substring(0, 12)}..`
            : product.title}
                </h5>
                <p class="card-text lead fw-bold mt-2">₹{parseInt(product.price * 84)}</p>
                <div className="d-flex">
               
                  <button className="btn btn-outline-dark me-2" onClick={()=>addproduct(product)}>
            Add cart
          </button>

                  
               
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                

                </div>
               
               
              </div>
            </div>
            </div>
           
          )
        }))}
      </>
    )
  }

  return (
    <>
    
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
         <div className="container-fluid">
         <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Here"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-primary" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

         </div>
    
          <div className="row d-flex justify-content-around">
            {loading ? <Loading /> : <Showproducts />}
          </div>
        </div>
      </div>

    </>
  )
}
