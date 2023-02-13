import React from 'react'
import Logo from '../pictures/vonal 1.svg';
import Food1 from '../pictures/food8.svg';
import Food2 from '../pictures/food7.png';
import Food3 from '../pictures/food6.png';
import Food4 from '../pictures/food5.png';

function Products() {
  return (
    <section id="products">
    <div className="second-container">
        <h1>Das Handwerk</h1>
        <h2>alles über unsere Hausgemachte Produkte</h2>
        <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
            Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.
            id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior</p>
        <button>Das Handwerk</button>
        <img src={Logo}  alt="Logo" id="logoNew"/>
    </div>

    <div class="pictures">
        <img src={Food1} alt="Food"/>
        <img src={Food2} alt="Food"/>
        <img src={Food3} alt="Food"/>
        <img src={Food4} alt="Food"/>

    </div>
</section>
  )
}

export default Products