$(document).ready(function() {

    $('.header-menu-mob__item--humburger').on('click', function() {
        $('.main-menu__list').slideToggle(100, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    var $menu = $('#menu');
    $(window).scroll(function(){
      if ( $(this).scrollTop() > -400 && $menu.hasClass('normal') ) {
      $menu.removeClass('normal').addClass('fix');
      }
      else if($(this).scrollTop() <= -400 && $menu.hasClass('fix')) {
      $menu.removeClass('fix').addClass('normal');
      }
    });

    $(function(){
      $('.clikblock, clickmenu').click(function(){$('html,body').animate({scrollTop:$('.stopblock, .stopmenu').offset().top}, 1200);});
    });

  $('.feedback__slider').slick({
    dots: false,
    centerMode: "true",
    infinite: true,
    speed: 300,
    prevArrow: '<img class="left" src="image/icon-left.png">',
    nextArrow: '<img class="right" src="image/icon-right.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1170,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: true,
          slidesToShow: 1,
          adaptiveHeight: true,
          centerMode: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          infinite: true,
          slidesToShow: 1,
          adaptiveHeight: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});