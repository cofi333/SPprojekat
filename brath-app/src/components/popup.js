import React from 'react'

function popup() {

    
        window.addEventListener("load", function() {

            const body= document.querySelector("body");
        
            setTimeout (
                function open(event) {
                    document.querySelector(".popup").style.display = "block";
                    body.style.overflow="hidden";
                },
                2000
            )
        })
    
    
    
    function closePopup() {
        
        const body= document.querySelector("body");
    
        document.querySelector(".popup").style.display = "none";
        body.style.overflow="auto";
    }

  return (
    <div className="popup">
        <div className="content">
        <h1>We value your privacy</h1>
            <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Cookie Policy</p>
            <a onclick={closePopup}><i class="fa-solid fa-x"></i></a>
        </div>
    </div>
  )
}

export default popup