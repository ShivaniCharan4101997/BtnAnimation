// main cards swiper
let swiperCards = new Swiper(".gallery-cards", {
    loop: true,
    loopedSlides: 5,
    effect: "fade",
    grabCursor: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  
  // thumbnail swiper
  let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween:20,
    slideToClickedSlide: true,
    pagination:{
        el:".swiper-pagination",
        type:"fraction"
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-previous",
    }
  });
  
  // link both sliders
  swiperCards.controller.control = swiperThumbs;
  swiperThumbs.controller.control = swiperCards;
  