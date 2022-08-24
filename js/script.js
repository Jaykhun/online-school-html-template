// ! slider

$('.team-slider__body').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.icon-left',
    prevArrow: '.icon-right',
    dots: false,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});

$('.slider__body').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.slider-left',
    prevArrow: '.slider-right',
    dots: true,
    responsive: [{
        breakpoint: 1725,
        settings: {
            arrows: false,
        }
    }
    ],
});
