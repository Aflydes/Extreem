let links = document.querySelectorAll('.main-page__nav-link');
    burger = document.querySelector('.burger');
    body = document.querySelector('body');
    clientHeight = document.documentElement.clientHeight;
    markerPos = -20;

burger.addEventListener('click', () => {
    document.querySelector('.burger__menu').classList.toggle('active');
    burger.classList.toggle('active');
    burger.classList.remove('_lock-animation');
    body.classList.toggle('lock-scroll');
});

if($(window).width() < 540){
    $('.welcome__video').attr("src", "img/mobile-video.mp4")
}


/**/
$( document ).on( "mousemove", function( event ) {
    let pageX = event.pageX;
    let pageY = event.pageY;
    let follower = $(".follower");

    follower.css({left:pageX - 74, top:pageY - 74});    
});


var timer;
var currentSlide = 'welcome';

$(window).bind('mousewheel', function(event){
 if( !$('.burger').hasClass('active')){
    if(timer) {
        window.clearTimeout(timer);
      }
    
    if (event.originalEvent.wheelDelta > 0) { 
        if (currentSlide != "welcome") {
            $('[data-slide='+ currentSlide +']').removeClass('active');
            $('.ticker-text').removeClass('ticker-text-animation');
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).find('.animation-inner-image').addClass("animation-down-image");
            timer = setTimeout(function() {
                $('#'+ currentSlide).addClass('hidden');
                currentSlide = $('#'+ currentSlide).prev().attr('id');
                $('#'+ currentSlide).removeClass('hidden');
                $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                $('#'+ currentSlide).find('.animation-inner-image').removeClass("animation-down-image");
                $('.ticker-text').addClass('ticker-text-animation');
                markerPos = $('[data-slide='+ currentSlide +']').position().top;
                markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 2.5;
                $('.screen-nav-marker').css('right', markerPos+ 'px');
                $('[data-slide='+ currentSlide +']').addClass('active');
            }, 700);
        }   
    }
    else {
        if (currentSlide != "last"){
            $('[data-slide='+ currentSlide +']').removeClass('active');
            $('.ticker-text').removeClass('ticker-text-animation');
            $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
            $('#'+ currentSlide).find('.animation-inner-image').addClass("animation-down-image");
            timer = setTimeout(function() {
                $('#'+ currentSlide).next().removeClass('hidden');
                $('#'+ currentSlide).addClass('hidden');              
                currentSlide = $('#'+ currentSlide).next().attr('id');
                $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                $('#'+ currentSlide).find('.animation-inner-image').removeClass("animation-down-image");
                $('.ticker-text').addClass('ticker-text-animation');
                markerPos = $('[data-slide='+ currentSlide +']').position().top;
                markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 2.5;
                $('.screen-nav-marker').css('right', markerPos+ 'px');
                $('[data-slide='+ currentSlide +']').addClass('active');
            }, 700);
        }  
    }
 }
});

var initialPoint;
var finalPoint;
body.addEventListener('touchstart', function (event) {
    initialPoint = event.changedTouches[0];
}, false);
body.addEventListener('touchend', function (event) {
if( !$('.burger').hasClass('active')){
    if(timer) {
        window.clearTimeout(timer);
      }

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
                    $('.ticker-text').removeClass('ticker-text-animation');
                    $('[data-slide='+ currentSlide +']').removeClass('active');
                    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
                    $('#'+ currentSlide).find('.animation-inner-image').addClass("animation-down-image");
                    timer = setTimeout(function() {
                        $('#'+ currentSlide).next().removeClass('hidden');
                        $('#'+ currentSlide).addClass('hidden');              
                        currentSlide = $('#'+ currentSlide).next().attr('id');
                        $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                        $('#'+ currentSlide).find('.animation-inner-image').removeClass("animation-down-image");
                        $('.ticker-text').addClass('ticker-text-animation');
                        markerPos = $('[data-slide='+ currentSlide +']').position().top;
                        markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 2.5;
                        $('.screen-nav-marker').css('right', markerPos+ 'px');
                        $('[data-slide='+ currentSlide +']').addClass('active');
                    }, 700);
                }  
            }
            else {
                if (currentSlide != "welcome") {
                    $('.ticker-text').removeClass('ticker-text-animation');
                    $('[data-slide='+ currentSlide +']').removeClass('active');
                    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
                    $('#'+ currentSlide).find('.animation-inner-image').addClass("animation-down-image");
                    timer = setTimeout(function() {
                        $('#'+ currentSlide).addClass('hidden');
                        currentSlide = $('#'+ currentSlide).prev().attr('id');
                        $('#'+ currentSlide).removeClass('hidden');
                        $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
                        $('#'+ currentSlide).find('.animation-inner-image').removeClass("animation-down-image");
                        $('.ticker-text').addClass('ticker-text-animation');
                        markerPos = $('[data-slide='+ currentSlide +']').position().top;
                        markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 2.5;
                        $('.screen-nav-marker').css('right', markerPos+ 'px');
                        $('[data-slide='+ currentSlide +']').addClass('active');
                    }, 700);
                } 
            }
        }
    }
}
}, false);

$('.main-page__nav-link').click( function(){
    let clickedLink = $(this).attr('data-slide');
    $('.ticker-text').removeClass('ticker-text-animation');
    $('[data-slide='+ currentSlide +']').removeClass('active');
    $('#'+ currentSlide).find('.animation-inner').addClass("animation-down");
    $('#'+ currentSlide).find('.animation-inner-image').addClass("animation-down-image");
    timer = setTimeout(function() {
        $('#'+ currentSlide).addClass('hidden');
        currentSlide = clickedLink;
        $('#'+ currentSlide).removeClass('hidden');
        $('#'+ currentSlide).find('.animation-inner').removeClass("animation-down");
        $('#'+ currentSlide).find('.animation-inner-image').removeClass("animation-down-image");
        $('.ticker-text').addClass('ticker-text-animation');
        markerPos = $('[data-slide='+ currentSlide +']').position().top;
        markerPos = markerPos + $('[data-slide='+ currentSlide +']').width()/2 - 1.5;
        $('.screen-nav-marker').css('right', markerPos+ 'px');
        $('[data-slide='+ currentSlide +']').addClass('active');
    }, 700);
});