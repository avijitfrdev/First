let button = document.getElementById("menu")
let menu = document.getElementById("drawer-menu")
let button2 = document.getElementById("menu-close")
let body = document.getElementsByTagName("body")
let closes = document.getElementById("closes")


button.addEventListener("click", function(){
   menu.style.transform = "translateX(0%)"
   document.body.style.overflow="hidden"
   button.style.display="none"
    closes.style.display= "block"
})

closes.addEventListener("click", function(){
    menu.style.transform = "translateX(-100%)"
    document.body.style.overflow="scroll"
    button.style.display="block"
    closes.style.display= "none"
})

var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    }
});


const swiper_2 = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
    breakpoints:{
        640: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 4,
        }
    }
  });