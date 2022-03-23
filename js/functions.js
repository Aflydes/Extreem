let links = document.querySelectorAll('.main-page__nav-link');
    slides = document.querySelectorAll('.wow');
    park = document.querySelector('#park');
    beach = document.querySelector('#beach');
    glamping = document.querySelector('#glamping');
    calendar = document.querySelector('#calendar');
    burger = document.querySelector('.burger');
    body = document.querySelector('body');
    clientHeight = document.documentElement.clientHeight;
    scrollPos = 0;

let slidesArr = document.querySelectorAll('.main-page__slide');
let currentSlide = slidesArr[0];

window.addEventListener('scroll', function () {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();

    slides.forEach(function (slide) {
        slide.classList.remove('animate__animated');
    });

   /* let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > scrollPos){
        if (currentSlide != slidesArr.length - 1){
            currentSlide = currentSlide.nextElementSibling;
            currentSlide.scrollIntoView({block: "center", behavior: "smooth"});     
        }
    } else {
        if (currentSlide != slidesArr[0]) {
            currentSlide = currentSlide.previousElementSibling;
            currentSlide.scrollIntoView({block: "center", behavior: "smooth"});     
        }
    }
    scrollPos = currentScrollPos;*/
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        slides.forEach(function (slide) {
            slide.classList.remove('animate__animated');
        });

    });
});

function getTopScrollPosition() {
    return window.pageYOffset;
}

document.addEventListener("keydown", function(event) {
    let topScrollPosition = getTopScrollPosition();

    if (event.code === "ArrowUp") {
        window.scrollBy(topScrollPosition, -clientHeight);
    }
    if (event.code === "ArrowDown") {
        window.scrollBy(topScrollPosition, clientHeight);
    }
});

burger.addEventListener('click', () => {
    document.querySelector('.burger__menu').classList.toggle('active');
    burger.classList.toggle('active');
    burger.classList.remove('_lock-animation');
    body.classList.toggle('lock-scroll');
    document.querySelectorAll('.burger__menu-item').forEach(function(burgerLink){
        burgerLink.classList.toggle('animate__animated');
    });
});