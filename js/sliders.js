$('.main-page__container').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    edgeFriction: 0.15,
    arrows: false,
    infinite: false,
    easing: 'liner',
    dots: true,
    appendDots: '.main-page__nav',
    customPaging: function(slick,index) {
        var targetName = slick.$slides.eq(index).data('name');
        return '<a href="#" class="main-page__nav-link">'+ targetName +'</a>';
    }
});
$('.main-page__container').on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
$('.main-page__container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.wow').addClass('animate__animated');
});
$('.main-page__container').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.wow').delay(2000).removeClass('animate__animated');
});