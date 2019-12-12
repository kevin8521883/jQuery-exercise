$(document).ready(function () {
    $('.menu li').click(function (e) { 
        e.preventDefault();
        $(this).find('.dropDown-open').slideToggle();
        $(this).siblings().find('ul').slideUp();
        $(this).find('.dropDown').toggleClass('active');
        $(this).siblings().find('.dropDown').removeClass('active');
    });
    $('.goTop a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },700);
    });
    $(window).scroll(function () { 
        if($(window).scrollTop()>300){
            $('.goTop').fadeIn();
        }
        else{
            $('.goTop').fadeOut();
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect:'fade',
        speed : 1500,
        autoplay: {
            delay: 3000,
          },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },        
      });
    
});