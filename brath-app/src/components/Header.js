import React from 'react'
import logo from '../pictures/logo.svg';
import PDF from '../pictures/Frame.svg';



function Header() {

  function myFunction() {
    var x = document.getElementById("navigationElements");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  return (
    <header id="navigation">
        <div className="container flex-container">
            <img src={logo} alt="Logo" id="logo"/>

            <nav>
            <ul id="navigationElements">
                    <li><a href="#">Die Metzgerei</a></li>
                    <li><a href="#">Dry Aged</a></li>
                    <li><a href="#">Fleischversand</a></li>
                    <li><a href="#">Events/Kurse</a></li>
                    <li><a href="#">Partyservice</a></li>
                    <li><a href="#">Tagesessen</a></li>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Kontakt</a></li>
                
            </ul>
        </nav>

        <a href="#" className="flex-container" id="downloadBtn"><img src={PDF} alt="PDF logo"/>download</a>
            <a onClick={myFunction}><i className="fa-solid fa-bars" id="hamburgerIcon"></i></a>

        </div>

    </header>
     
  )
}

export default Header
