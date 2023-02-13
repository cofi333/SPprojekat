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
        <div class="pre-footer">
            <div class="container flex-container3">
                <div class="informations">
                    <div class="location flex-container">
                      <img src={Location} alt="Icon"/>
                        <span>Klauprechtstraße  25
                            76137 Karlsruhe, Germany</span>
                        
                    </div>

                    <div class="phone flex-container">
                        <img src={Phone} alt="Icon"/>
                        <span>
                            +49 721 358060
                            </span>
                    </div>

                    <div class="mail flex-container">
                        <img src={Mail} alt="Icon"/>
                        <span>
                            info@partyservice-brath.de</span>
                    </div>
                    

                    
                </div>

                <img src={Logo} alt="Logo" id="footer-logo"/>
               


            <div class="social-medias">
                <div class="flex-container">
                    <span>Besuchen Sie uns auf:</span>
                    <img src={Twitter} alt="Twitter Logo"/>
                    <img src={Facebook} alt="Facebook Logo"/>
                    <img src={Instagram} alt="Instagram Logo"/>
                    <img src={Youtube} alt="Youtube Logo"/>
                </div>
            </div>

            </div>
        </div>


        <div class="footer">
            <div class="container flex-container">
                <span>© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</span>
                <span>Code and design by <a href="https://www.studiopresent.com/">StudioPresent</a></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer