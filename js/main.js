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

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $(function(){
      $('.clikblock').click(function(){$('html,body').animate({scrollTop:$('.stopblock').offset().top}, 1200);});
    });

    $('.del').click(function() {
        $('.del-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.del-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.del-fade').fadeOut();
        }
    });
    
    $('.del-fade').click(function(e) {
        if ($(e.target).closest('.popup-del').length == 0) {
            $(this).fadeOut();                    
        }
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
            slidesToShow: 1,
            centerPadding: "200px",
            slidesToScroll: 1,
            centerMode: true,
            infinite: false,
            variableWidth: false,
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

  	$('.banner__list').slick({
    	dots: false,
    	centerMode: "true",
    	infinite: true,
    	speed: 300,
    	prevArrow: '<img class="left-arrow" src="image/icon-left.png">',
    	nextArrow: '<img class="right-arrow" src="image/icon-right.png">',
    	slidesToShow: 3,
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

  	$(function(){
			$("#datepicker").datepicker({
			showOn: "button",
			buttonImage: "https://snipp.ru/demo/437/calendar.gif",
			buttonImageOnly: true,
			buttonText: "Выбрать дату"
			});
		});
});