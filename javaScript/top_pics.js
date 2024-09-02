let swiper = new Swiper(".card_slider", {
    slidesPerView: 4, 
    spaceBetween: 30, 
    loop: true,
    speed: 500,
    pagination: {
        el: ".swiper-pagination", 
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
 