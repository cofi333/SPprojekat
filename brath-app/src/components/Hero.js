import React from 'react'
import background1 from '../pictures/background.svg';
import background2 from '../pictures/background2slider.jpg';
import background3 from '../pictures/background3slider.jpg';
import NextBtn from '../pictures/rightarrow.png';
import PrevBtn from '../pictures/leftarrow.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";


function Hero() {

  
  return (
    <section id="hero">
      <div className="swiper mySwiper2">
        <div className="swiper-wrapper">
        <Swiper 
      loop={true} 
      className="mySwiper" 
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }} 
      modules={[Navigation,Pagination]}
      pagination={{
        clickable: true,
        el: ".swiper-pagination"
      }}
      
    

      >
        <SwiperSlide><img src={background1} alt="Background"/></SwiperSlide>
        <SwiperSlide><img src={background2} alt="Background"/></SwiperSlide>
        <SwiperSlide><img src={background3} alt="Background"/></SwiperSlide>
      </Swiper>

        </div>
        <div className="swiper-elements">
                    <div className="button-next"><img src={NextBtn} alt="Right arrow"/></div>
                    <div className="button-prev"><img src={PrevBtn} alt="Left arrow"/></div>
                    <div className="swiper-pagination"></div>
                </div>
      </div>
      
      <div className="text-background" id="hero-text">
                <div className="text">
                    <h1>Heiko Brath
                        Metzgermeister</h1>
                        <p>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
                    </div>
            </div>
    </section>
  )
}

export default Hero