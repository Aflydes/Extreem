$('.main-page__container').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    edgeFriction: 0.15,
    arrows: false,
    infinite: false,
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
$('.main-page__container').on('swipe', function(event, slick, direction){
    $('.wow').addClass('animate__animated');
});
$('.main-page__container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.wow').removeClass('animate__animated');
});