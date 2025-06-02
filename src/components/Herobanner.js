import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";               
import "swiper/css/pagination";    
import "swiper/css/navigation";    

const HeroBanner = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]} 
      loop={true}                        
      autoplay={{ delay: 5000 }}         
      pagination={{ clickable: true }}   
      navigation                        
    >
      <SwiperSlide>
        <img src="banner1.jpg" alt="Banner1" className="banner-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="banner2.jpg" alt="Banner2" className="banner-img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanner;
