import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";               
import "swiper/css/pagination";    
import "swiper/css/navigation";    

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
              Prime
            </button>
          </div>
        </div>

                        
        </div>
      </div>
  );
};

export default HeroBanner;
