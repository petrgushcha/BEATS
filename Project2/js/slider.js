const slider = $('.slider__items').bxSlider({ 
    pager: false,
    controls:false
});

$('.left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})