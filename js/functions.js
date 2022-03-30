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
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).addClass('hidden');
            currentSlide = $('#'+ currentSlide).prev().attr('id');
            $('#'+ currentSlide).removeClass('hidden');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 8;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }   
    }
    else {
        if (currentSlide != "last"){
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).next().removeClass('hidden');
            $('#'+ currentSlide).addClass('hidden');              
            currentSlide = $('#'+ currentSlide).next().attr('id');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }  
    }
});
$(window).on("swipe",function(event){
    if (event.originalEvent.wheelDelta > 0) { 
        if (currentSlide != "welcome") {
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).addClass('hidden');
            currentSlide = $('#'+ currentSlide).prev().attr('id');
            $('#'+ currentSlide).removeClass('hidden');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 8;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }   
    }
    else {
        if (currentSlide != "last"){
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).next().removeClass('hidden');
            $('#'+ currentSlide).addClass('hidden');              
            currentSlide = $('#'+ currentSlide).next().attr('id');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }  
    }
});

$('.main-page__nav-link').click( function(){
    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
    $('#'+ currentSlide).addClass('hidden');
    currentSlide = $(this).attr('data-slide');
    $('#'+ currentSlide).removeClass('hidden');
    $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
    markerPos = $('[data-slide='+ currentSlide +']').position().top;
    markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
    $('.screen-nav-marker').css('right', markerPos+ 'px');
});
$('.main-page').on("swipe", function(){
    if(direction  == "swipeUp"){
        if (currentSlide != "last"){
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).next().removeClass('hidden');
            $('#'+ currentSlide).addClass('hidden');              
            currentSlide = $('#'+ currentSlide).next().attr('id');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }  
    } else if(direction  == "swipeDown") {
        if (currentSlide != "welcome") {
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).addClass('hidden');
            currentSlide = $('#'+ currentSlide).prev().attr('id');
            $('#'+ currentSlide).removeClass('hidden');
            $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
            markerPos = $('[data-slide='+ currentSlide +']').position().top;
            markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 8;
            $('.screen-nav-marker').css('right', markerPos+ 'px');
        }  
    }
});

var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function (event) {
    initialPoint = event.changedTouches[0];
}, false);
document.addEventListener('touchend', function (event) {
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                /*СВАЙП ВЛЕВО*/
            }
            else {
                /*СВАЙП ВПРАВО*/
            }
        }
        else {
            if (finalPoint.pageY < initialPoint.pageY) {
                if (currentSlide != "last"){
                    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
                    $('#'+ currentSlide).next().removeClass('hidden');
                    $('#'+ currentSlide).addClass('hidden');              
                    currentSlide = $('#'+ currentSlide).next().attr('id');
                    $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                    markerPos = $('[data-slide='+ currentSlide +']').position().top;
                    markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
                    $('.screen-nav-marker').css('right', markerPos+ 'px');
                }  
            }
            else {
                if (currentSlide != "welcome") {
                    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
                    $('#'+ currentSlide).addClass('hidden');
                    currentSlide = $('#'+ currentSlide).prev().attr('id');
                    $('#'+ currentSlide).removeClass('hidden');
                    $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                    markerPos = $('[data-slide='+ currentSlide +']').position().top;
                    markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 8;
                    $('.screen-nav-marker').css('right', markerPos+ 'px');
                }  
            }
        }
    }
}, false);