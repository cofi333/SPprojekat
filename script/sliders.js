var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    
  });


  var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },

    loop:true,
  });

