import React from 'react'
import background1 from '../pictures/background.svg';
import background2 from '../pictures/background2slider.jpg';
import background3 from '../pictures/background3slider.jpg';

function Hero() {

    
  return (
    <section id="hero">
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img src={background1} alt="Background"/>
            </div>

            <div className="mySlides fade">
                <img src={background2} alt="Background"/>
            </div>

            <div className="mySlides fade">
                <img src={background3} alt="Background"/>
            </div>
        </div>
    </section>
  )
}

export default Hero