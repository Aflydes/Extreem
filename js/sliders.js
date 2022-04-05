$('.sport-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.sport-slide__arrow-left'),
    nextArrow: $('.sport-slide__arrow-right')
});
$('.health-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.health-slide__arrow-left'),
    nextArrow: $('.health-slide__arrow-right')
});
$('.watersport-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.watersport-slide__arrow-left'),
    nextArrow: $('.watersport-slide__arrow-right')
});
$('.food-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.food-slide__arrow-left'),
    nextArrow: $('.food-slide__arrow-right')
});
$('.child-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.child-slide__arrow-left'),
    nextArrow: $('.child-slide__arrow-right')
});
$('.art-slide__photo-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.art-slide__arrow-left'),
    nextArrow: $('.art-slide__arrow-right')
})

$('.full-page__image-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    swipeToSlide: true,
    asNavFor: '.image-card__slider-inner'
});
$('.image-card__slider-inner').slick({
    slidesToShow: 3,
    asNavFor: '.full-page__image-slider',
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: $('.card-slide__arrow-left'),
    nextArrow: $('.card-slide__arrow-right'),
});

function setProgress(index) {
    const calc = ((index + 1) / ($('.image-card__slider-inner').slick('getSlick').slideCount)) * 100;
    $('.image-card__slider-progressbar')
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);
}
$('.image-card__slider-inner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    setProgress(nextSlide);
  });
$('.image-card__slider-inner').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.image-card__slide-number').text('0' + i);
});
