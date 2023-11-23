const slider = $('.slider__items').bxSlider({ 
    pager: false,
    controls:false
});

$('.left').click(e => {
    e.preventDefolt();
    slider.goToPrevSlide();
})

$('.right').click(e => {
    e.preventDefolt();
    slider.goToNextSlide();
})