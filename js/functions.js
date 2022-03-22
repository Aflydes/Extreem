window.addEventListener('scroll', function() {
    const wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animate__animated', 
        offset: 0, 
        mobile: true, 
        live: true
    })
    wow.init();
});

  let links = document.querySelectorAll('.main-page__nav-link');
  let slides = document.querySelectorAll('.wow');

  links.forEach( function(link){
    link.addEventListener('click', function(){
        slides.forEach( function(slide){
            slide.classList.remove('animate__animated');
        });
    });
  });

