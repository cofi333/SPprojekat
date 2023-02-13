function lightFunction() {
    const workTime= document.getElementById("workTime");
    const hero2 = document.getElementById("hero2");
    const products = document.getElementById("products");
    const aboutUs = document.getElementById("aboutUs");
    const hero= document.getElementById("hero-text");
    
    workTime.classList.toggle("lightMode");
    hero2.classList.toggle("lightMode");
    products.classList.toggle("lightMode");
    aboutUs.classList.toggle("lightMode");
    hero.classList.toggle("lightMode");

  }