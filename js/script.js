$(".mb-menu-btn").click(function() {
    $(".nav").toggleClass("nav-active")
    $(this).toggleClass("mb-menu-btn-active")
    $("body").toggleClass("lock")
})

const cardsSwiper = new Swiper('.how-cards-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    pagination: {
        el: ".how-cards-pagination",
        clickable: true,
    }
})