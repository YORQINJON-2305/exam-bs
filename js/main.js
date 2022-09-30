$(function () {
    $('.slider-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: true,
        prevArrow: "<span><img src='./images/left-arrow.svg' alt='Left arrow'></span>",
        nextArrow: "<span><img src='./images/right-arrow.svg' alt='Right arrow'></span>",
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow:1,
                }
            }
        ]
      });
});