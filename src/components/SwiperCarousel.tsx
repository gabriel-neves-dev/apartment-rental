import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: "1",
    image:
      "https://www.economist.com/img/b/1280/721/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
  },
  { id: "2", image: "" },
  { id: "3", image: "" },
  { id: "4", image: "" },
];

function Carousel() {
  return (
    <div className="carousel-container">
      <h2>OI</h2>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
