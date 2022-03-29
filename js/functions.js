let links = document.querySelectorAll('.main-page__nav-link');
    slides = document.querySelectorAll('.wow');
    park = document.querySelector('#park');
    beach = document.querySelector('#beach');
    glamping = document.querySelector('#glamping');
    calendar = document.querySelector('#calendar');
    burger = document.querySelector('.burger');
    body = document.querySelector('body');
    clientHeight = document.documentElement.clientHeight;
    markerPos = -20;

burger.addEventListener('click', () => {
    document.querySelector('.burger__menu').classList.toggle('active');
    burger.classList.toggle('active');
    burger.classList.remove('_lock-animation');
    body.classList.toggle('lock-scroll');
    document.querySelectorAll('.burger__menu-item').forEach(function(burgerLink){
        burgerLink.classList.toggle('animate__animated');
    });
});



const screenHeight = window.screen.availHeight;
/**/
$( document ).on( "mousemove", function( event ) {
    let pageX = event.pageX;
    let pageY = event.pageY;
    let follower = $(".follower");

    follower.css({left:pageX - 74, top:pageY - 74});    
});

var currentSlide = 'welcome';
$(window).bind('mousewheel', function(event){
    if (event.originalEvent.wheelDelta > 0) { 
        if (currentSlide != "welcome") {
            $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').removeClass('animate__fadeInUp');
            $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__fadeOutDown');
            $('#'+ currentSlide).prev().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__animated');
            $('#'+ currentSlide).prev().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').removeClass('animate__fadeOutDown');
            $('#'+ currentSlide).prev().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__fadeInUp');
            $('#'+ currentSlide).prev().removeClass('hidden');
            $('#'+ currentSlide).addClass('hidden');
            currentSlide = $('#'+ currentSlide).prev().attr('id');
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 8;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }   
    }
    else {
        if (currentSlide != "last"){
            $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').removeClass('animate__fadeInUp');
            $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__fadeOutDown');
            $('#'+ currentSlide).next().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__animated');
            $('#'+ currentSlide).next().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').removeClass('animate__fadeOutDown');
            $('#'+ currentSlide).next().find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__fadeInUp');
            $('#'+ currentSlide).next().removeClass('hidden');
            $('#'+ currentSlide).addClass('hidden');
            currentSlide = $('#'+ currentSlide).next().attr('id');
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }  
    }
});
$('.main-page__nav-link').click( function(){
    $('#'+ currentSlide).addClass('hidden');
    currentSlide = $(this).attr('data-slide');
    $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__animated')
    $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').removeClass('animate__fadeOutDown');
    $('#'+ currentSlide).find('.ticker, .slide__images, .slide__title, .slide-text, .slide__button').addClass('animate__fadeInUp');
    $('#'+ currentSlide).removeClass('hidden');
    markerPos = $('[data-slide='+ currentSlide +']').position().top;
    markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
    $('.screen-nav-marker').css('right', markerPos+ 'px');
});

