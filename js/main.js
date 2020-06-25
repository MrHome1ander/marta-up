$(function () {

    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

});