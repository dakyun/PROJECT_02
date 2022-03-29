$('.main_visual').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
});
$('.banner_slider').slick({
    arrows:false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
});
$('.bgbn_mobile_on').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
});
$('.banner_slider_m').slick({
    arrows:false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2500,
});
$('.story_slider').slick({
    dots: false,
    infinite: false,
    draggable:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: false,
            dots: false,
            centerMode: true,
            centerPadding: '30px',
          }
        }
    ]
  });
  $('.thumb_slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          draggable:true,
        }
      },
    ]
  });
  $('.hot_slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          draggable:true,
          centerMode: true,
            centerPadding: '30px',
        }
      },
    ]
  });
  $('.event_slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          draggable:true,
        }
      },
    ]
  });