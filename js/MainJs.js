$(document).ready(function(){
    $('.slider-menu').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: true,
        mobileFirst: true,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        fade: true,
        cssEase: 'linear'
    });
});

