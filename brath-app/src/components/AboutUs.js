import React from 'react'
import Logo from '../pictures/geneussnetzlogo.png';
import Logo2 from '../pictures/vonal 1.svg';
import Grade1 from '../pictures/nagrada1.svg';
import Grade2 from '../pictures/nagrada2.svg';
import Grade3 from '../pictures/nagrada3.svg';
import Grade4 from '../pictures/nagrada4.svg';

function AboutUs() {
  return (
    <section id="aboutUs">
        <div class="second-container">
            <div class="flex-container first-content">
                <div class="logo">
                    <img src={Logo} alt="logo"/>
                </div>

                <div class="text">
                    <h1>Metzgerei Brath ist Mitglied 
                        im Genussnetzwerk</h1>
                    
                    <button>Gehen zu site</button>
                </div>
            </div>

            
                <img src={Logo2}  alt="Logo" id="logoNew"/>
           
        </div>  
        

    <div class="flex-container awards second-container">

        <h1>Auszeichnungen</h1>

        <div class="flex-container2 second-container">
            
           

            <div id="item">
                <img src={Grade1} alt="Item"/>
                <p>Tollit argumentum genau
                    Saepe lobortis</p>
            </div>

            <div id="item">
                <img src={Grade2} alt="Item"/>
                <p>Schneewittchen
                    denique</p>
            </div>

            <div id="item">
                <img src={Grade3} alt="Item"/>
                <p>Grimms Märchen 
                    expetenda</p>
            </div>

            <div id="item">
                <img src={Grade4} alt="Item"/>
                <p>Mettwurst mei 
                    ullum gloriatur.</p>
            </div>
        </div>
    </div>

        <div class="second-container">
            <img src={Logo2}  alt="Logo" id="logoNew2"/>
        </div>

</section>
  )
}

export default AboutUs