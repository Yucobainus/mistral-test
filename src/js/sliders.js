

$(document).ready(function () {
    $('.carousel-portfolio').slick({
        infinite: true,
        vertical: true,
        dots: true,
        verticalSwiping: true,
        appendDots: $('.portfolio__controller_dots'),
        prevArrow: $('#portfolio__arrow-prev'),
        nextArrow: $('#portfolio__arrow-next'),
    });


    $('.feedback-carousel').slick({
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $('#feedback__arrow-prev'),
        nextArrow: $('#feedback__arrow-next'),
        responsive: [{

            breakpoint: 576,
            settings: {
                prevArrow: $('#feedback__mobile-prev'),
                nextArrow: $('#feedback__mobile-next'),
            }

        }]
    });

});