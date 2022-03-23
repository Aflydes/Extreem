let links = document.querySelectorAll('.main-page__nav-link');
    slides = document.querySelectorAll('.wow');
    park = document.querySelector('#park');
    beach = document.querySelector('#beach');
    glamping = document.querySelector('#glamping');
    calendar = document.querySelector('#calendar');
    scrollHeight = document.documentElement.clientHeight;

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
document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowUp"){
        window.scrollTo(0, -scrollHeight);
        console.log(1);
    }
    if(event.code == "ArrowDown"){
        window.scrollTo(0, scrollHeight);
        console.log(2);
    }
});