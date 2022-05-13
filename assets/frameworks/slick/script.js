$(document).ready(() => {
    //$('.carousel-items').slick();
    $('#slideshow .slick').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 8000,
        // prevArrow: '<div class="slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
        responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     infinite: true,
            //     dots: true
            //   }
            // },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});