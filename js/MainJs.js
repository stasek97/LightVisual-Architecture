$(document).ready(function(){
    $('.slider-menu').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        // adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: true,
        mobileFirst: true,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        CenterMode: true
    });

});



