$(document).ready(function(){
    $('.slider-menu').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: true,
        mobileFirst: true,
        nextArrow: '<button class="slick-next"></button>',
        prevArrow: '<button class="slick-prev"></button>',
        fade: true,
        cssEase: 'linear'
    });

});



