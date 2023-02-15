import React from 'react'
import clock from '../pictures/Vector.svg';

function WorkTime() {

  function lightFunction() {
    const workTime= document.getElementById("workTime");
    const hero2 = document.getElementById("hero2");
    const products = document.getElementById("products");
    const aboutUs = document.getElementById("aboutUs");
    const hero= document.getElementById("hero-text");
    
    workTime.classList.toggle("lightMode");
    hero2.classList.toggle("lightMode");
    products.classList.toggle("lightMode");
    aboutUs.classList.toggle("lightMode");
    hero.classList.toggle("lightMode");

  }

  return (
    <section id="workTime">
        <div className="container">
            <div className="content">

                <a onClick={lightFunction} className="light-btn" id="light">LIGHT <i className="fa-regular fa-lightbulb"></i></a>

                <div className="time">
                 <img src={clock} alt="Time"/>
                <span>Opentime:   Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</span>  
                </div>

            </div>  
            
        </div>
        
    </section>
  )
}

export default WorkTime