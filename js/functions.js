let links = document.querySelectorAll('.main-page__nav-link');
    slides = document.querySelectorAll('.wow');
    park = document.querySelector('#park');
    beach = document.querySelector('#beach');
    glamping = document.querySelector('#glamping');
    calendar = document.querySelector('#calendar');
    burger = document.querySelector('.burger');
    body = document.querySelector('body');
    clientHeight = document.documentElement.clientHeight;

burger.addEventListener('click', () => {
    document.querySelector('.burger__menu').classList.toggle('active');
    burger.classList.toggle('active');
    burger.classList.remove('_lock-animation');
    body.classList.toggle('lock-scroll');
    document.querySelectorAll('.burger__menu-item').forEach(function(burgerLink){
        burgerLink.classList.toggle('animate__animated');
    });
});

/**/
$( document ).on( "mousemove", function( event ) {
    let pageX = event.pageX;
    let pageY = event.pageY;
    let follower = $(".follower");

    follower.css({left:pageX - 74, top:pageY - 74});    
});