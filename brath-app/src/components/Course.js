import React from 'react'
import Background from '../pictures/background2.jpg';

function Course() {
  return (
    <section id="course">

    <div className="flex-container content">
      
            <div className="text">
                <div className="text-content ">
                <h1>Buchen Sie den 
                    Grillkurs jetzt</h1>

                <ul>
                    <li>professioneller Lehrer</li>
                    <li>ausgezeichneter Metzger</li>
                    <li>1 Tag</li>
                    <li>lernen Sie die Kunst des Grillens</li>
                </ul>

                <button>GrillKurs</button>
                </div>
            </div>

    
    <div className="picture">
        <img src={Background} alt="Background"/>
    </div>

    </div>
</section>
  )
}

export default Course