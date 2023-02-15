import React from 'react'
import Location from '../pictures/location.png';
import Phone from '../pictures/phone.png';
import Mail from '../pictures/mail.png';
import Logo from '../pictures/footer-logo.png';
import Twitter from '../pictures/twitter.png';
import Facebook from '../pictures/facebook.png';
import Instagram from '../pictures/instagram.png';
import Youtube from '../pictures/youtube.png';

function Footer() {
  return (
    <footer>
        <div className="pre-footer">
            <div className="container flex-container3">
                <div className="informations">
                    <div className="location flex-container">
                      <img src={Location} alt="Icon"/>
                        <span>Klauprechtstraße  25
                            76137 Karlsruhe, Germany</span>
                        
                    </div>

                    <div className="phone flex-container">
                        <img src={Phone} alt="Icon"/>
                        <span> <a href="tel: +49 721 358060"> +49 721 358060</a></span>
                    </div>

                    <div className="mail flex-container">
                        <img src={Mail} alt="Icon"/>
                        <span> <a href="mailto:info@partyservice-brath.de">info@partyservice-brath.de</a>
                            </span>
                    </div>
                    

                    
                </div>

                <img src={Logo} alt="Logo" id="footer-logo"/>
               


            <div className="social-medias">
                <div className="flex-container">
                    <span>Besuchen Sie uns auf:</span>
                    <a href="#"><img src={Twitter} alt="Twitter Logo"/></a>
                    <a href="#"><img src={Facebook} alt="Facebook Logo"/></a>
                    <a href="#"><img src={Instagram} alt="Instagram Logo"/></a>
                    <a href="#"><img src={Youtube} alt="Youtube Logo"/></a>
                </div>
            </div>

            </div>
        </div>


        <div className="footer">
            <div className="container flex-container">
                <span>© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</span>
                <span>Code and design by <a href="https://www.studiopresent.com/">StudioPresent</a></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer