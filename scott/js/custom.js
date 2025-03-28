
$(document).ready(function () {
  $('.slide1').slick({
    autoplaySpeed: 0,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 3000,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
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





  $('.slide2').slick({
    autoplaySpeed: 0,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 3000,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: false,
    autoplay: true,
    rtl: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.imgboxslider').slick({
    autoplaySpeed: 0,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    fade: true,
  });
});