function lightFunction() {
    const workTime= document.getElementById("workTime");
    const hero2 = document.getElementById("hero2");
    const products = document.getElementById("products");
    const aboutUs = document.getElementById("aboutUs");


    workTime.classList.toggle("lightMode");
    hero2.classList.toggle("lightMode");
    products.classList.toggle("lightMode");
    aboutUs.classList.toggle("lightMode");


  }