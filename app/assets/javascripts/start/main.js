$(function() {
    /* ==========================================================================
       Contact Form
       ========================================================================== */


    $('#contact-form').validate({
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },

            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "php/contact-me.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.error-cf').fadeIn();
                    });
                }
            });
        }
    });
    "use strict";

   /* ==========================================================================
   *    countdown
   * ========================================================================== */

       $('.countdown').downCount({
                 date: '01/12/2015 12:00:00' // m/d/y
                    });


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

    $(".main-backstretch").backstretch([
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
            $('.main').css('opacity', function() { return 1 - ($(window).scrollTop() / $(this).outerHeight()); }); }); }; /* ========================================================================== Textrotator ========================================================================== */ $(".rotate").textrotator({ animation: "dissolve", separator: ",", speed: 2500 });

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

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top-btn').fadeIn(200);
        } else {
            $('.scroll-top-btn').fadeOut(200);
        }
    });

    $('.scroll-top a').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



});
