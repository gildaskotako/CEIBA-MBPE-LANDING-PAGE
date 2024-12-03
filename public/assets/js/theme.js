/*-----------------------------------------------------------------------------------
    
Template Name: CEIBA Analytics 
URI: https://ceiba-analytics.com/
Description: Mutualisation des Archives du Budget et du Portefeuille de L’État
Author: CEIBA Analytics
Version: 2.0 

    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Slick slider js

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


})(window.jQuery);