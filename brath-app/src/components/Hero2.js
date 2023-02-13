import React from 'react'
import Food1 from '../pictures/food1.svg';
import Food2 from '../pictures/food2.png';
import Food3 from '../pictures/food3.svg';
import Food4 from '../pictures/food4.svg';

function Hero2() {
  return (
    <section id="hero2">
        <div className="content second-container flex-container">
        <div className="text">
                 <h1>Dry aged</h1>  
                 <h2>Alte Wutz, Dry Aged</h2>
                 <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.
                    id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>

                    <div className="buttons flex-container">
                        <button id="leftBtn">Dry Aged</button>
                        <button>Alte Wurtz</button>
                    </div>       
            </div>

            <div className="picture">
                <div className="pictures">
                    <div className="top">
                <img src={Food1} id="food1" alt="Food"/>  
            </div>
                <div className="pictures flex-container">
                    <img src={Food2} id="food2" alt="Food"/>
                    <img src={Food3} id="food3" alt="Food"/>
                    <img src={Food4} id="food4" alt="Food"/>
                </div>
            </div>
            </div>
        </div>

       
    </section>
  )
}

export default Hero2