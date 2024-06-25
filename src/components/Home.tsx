import Carousel from "./SwiperCarousel";
import React from "react";
import logo from "../assets/logo1.png";
import Cards from "./HomeCards";

function Home() {
  return (
    <div className="background-image-with-overlay">
      <img src={logo} alt="" className="logo" />
      <div className="container">
        <Cards />
      </div>
      <Carousel></Carousel>
    </div>
  );
}

export default Home;
