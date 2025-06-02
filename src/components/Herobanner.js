import React from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomImageOne from "../img/banner1.jpg";
import CustomImageTwo from "../img/banner2.jpg";

const HeroBanner = () => {
  const navigate = useNavigate(); 
  const images = [CustomImageOne, CustomImageTwo];

  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Find Your Style, Live Your Best</h1>
          <p>Explore top products with authenticity and confidence.</p>
          <div className="hero-buttons">
            <button
              className="btn download-btn"
              onClick={() => navigate('/404')}
            >
              Download App
            </button>
            <button
              className="btn cart-btn"
              onClick={() => navigate('/404')}
            >
              Log-In
            </button>
          </div>
        </div>

        <div className="hero-slider">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="swiper-container"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="slider-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
