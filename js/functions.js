let links = document.querySelectorAll('.main-page__nav-link');
    slides = document.querySelectorAll('.wow');
    park = document.querySelector('#park');
    beach = document.querySelector('#beach');
    glamping = document.querySelector('#glamping');
    calendar = document.querySelector('#calendar');

window.addEventListener('scroll', function () {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        slides.forEach(function (slide) {
            slide.classList.remove('animate__animated');
        });

    });
});
