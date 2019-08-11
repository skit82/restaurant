$(document).ready(function() {

    $('.page-header__mob-open').on('click', function() {
        $('.user').slideToggle(100, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

  $('.feedback__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: '<img class="left" src="img/left.png">',
    nextArrow: '<img class="right" src="img/right.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});