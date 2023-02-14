import React from 'react'
import Logo from '../pictures/geneussnetzlogo.png';
import Logo2 from '../pictures/vonal 1.svg';
import Grade1 from '../pictures/nagrada1.svg';
import Grade2 from '../pictures/nagrada2.svg';
import Grade3 from '../pictures/nagrada3.svg';
import Grade4 from '../pictures/nagrada4.svg';
import Icon1 from '../pictures/Group.png';
import Icon2 from '../pictures/zvezdice.svg';
import Icon3 from '../pictures/znak.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow} from "swiper";

function AboutUs() {
  return (
    <section id="aboutUs">
        <div className="second-container">
            <div className="flex-container first-content">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>

                <div className="text">
                    <h1>Metzgerei Brath ist Mitglied 
                        im Genussnetzwerk</h1>
                    
                    <button>Gehen zu site</button>
                </div>
            </div>

            
                <img src={Logo2}  alt="Logo" id="logoNew"/>
           
        </div>  
        

    <div className="flex-container awards second-container">

        <h1>Auszeichnungen</h1>

        <div className="flex-container2 second-container">
            
           

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

        <div className="second-container">
            <img src={Logo2}  alt="Logo" id="logoNew2"/>
        </div>

        <div className="quotes">
            <div className="second-container">
                <h3>Empfehlungs</h3>
                <h1>Was die Leute über uns sagen</h1>

                <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
                
            }}
            modules={[EffectCoverflow]}
            className="mySwiper" 
            >
                <SwiperSlide className="card">
                    <img src={Icon1} alt="Icon"/>
                    <img src={Icon2} alt="Stars" id="stars-icon"/>
                                

                    <p className="p-card">Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .</p>
                    <h3 className="p-card">Halling Tobias</h3>
                    <h5 className="p-card">Koch</h5>

                    <img id="quote-icon" src={Icon3} alt="Icon"/>
                </SwiperSlide>
                <SwiperSlide className="card2">
                    <p className="p-card">Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                    <h5 className="p-card">Maria Kartofeln</h5>
                </SwiperSlide>
                <SwiperSlide className="card2">
                    <p className="p-card">Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>
                    <h5 className="p-card">Rene Weinstein</h5>
                </SwiperSlide>
            </Swiper>

            </div>

            

        </div>

</section>
  )
}

export default AboutUs