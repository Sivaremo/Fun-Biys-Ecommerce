import React from 'react'
import Products from './Products'
import  { useEffect,useState } from 'react';

export default function MainPage() {
    useEffect(() => {
        document.title = `Fun Boys - Ecommerce `;
      }, []);
    
  // Use useEffect to save the dark mode preference to local storage

  return (
   <div className="hero">
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://swapnilmens.com/Home_Page_Image/slider2.jpg" class="d-block w-100" alt="..." height={'550px'}/>
    </div>
    <div class="carousel-item">
      <img src="https://templates.simplified.co/thumb/3446e660-7af3-4ff6-86ce-755afcde8fcd.jpg" class="d-block w-100" alt="..." height={'550px'}/>
    </div>
    <div class="carousel-item">
      <img src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg" class="d-block w-100" alt="..." height={'550px'}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<Products/>
   </div>
  )
}
