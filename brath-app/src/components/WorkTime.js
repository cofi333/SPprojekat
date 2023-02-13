import React from 'react'
import clock from '../pictures/Vector.svg';

function WorkTime() {
  return (
    <section id="workTime">
        <div className="container">
            <div className="content">

                <a className="light-btn">LIGHT <i className="fa-regular fa-lightbulb"></i></a>

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