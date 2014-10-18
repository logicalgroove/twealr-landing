$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */

    $(window).load(function() {

        $("#status").fadeOut();

        $("#preloader").delay(1000).fadeOut("slow");
    });


    /* ==========================================================================
   Background Slideshow images
   ========================================================================== */

    $(".main").backstretch([
        "/assets/start/bg-1.jpg",
        "/assets/start/bg-2.jpg",
        "/assets/start/bg-3.jpg"
    ], {
        fade: 750,
        duration: 4000
    });


    /* ==========================================================================
   On Scroll animation
   ========================================================================== */

    if ($(window).width() > 992) {
        new WOW().init();
    };


    /* ==========================================================================
   Fade On Scroll
   ========================================================================== */


    if ($(window).width() > 992) {

        $(window).on('scroll', function() {
            $('.main').css('opacity', function() {
                return 1 - ($(window).scrollTop() / $(this).outerHeight());
            });
        });
    };


    /* ==========================================================================
     Textrotator
     ========================================================================== */



    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2500
    });


    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */


    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });


    $('.scroll-top a').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



});
