var mainSlider = $('.main-slider');
var notesSlider = $('.slick-slider-notes');

function marginSpotter(sliderMargin, slidesAmount, slideWidth) {   
  var marginR = Math.round((window.innerWidth - sliderMargin*2 - slideWidth*slidesAmount - 20)/(slidesAmount-1) )   
  $('.js-note-card').css("marginRight", marginR + 'px');
}

function noteSliderSpotter(slideWidth){
  if (window.innerWidth <= 1320 && window.innerWidth >= 1000){ 
    marginSpotter(40, 4, slideWidth)
  } else if (window.innerWidth <= 1000 && window.innerWidth >= 765){
    marginSpotter(75, 3, slideWidth)
  } else if (window.innerWidth <= 765 && window.innerWidth >= 630){
    marginSpotter(75,2, slideWidth)
  }
}

$(document).ready(function() {
  if (mainSlider.length) {
    $('.main-slider').slick({
      dots: true,
      centerMode: true,
      infinite: true,
      variableWidth: true,
    })

  } if(notesSlider.length) {
      $('.slick-slider-notes').slick({
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true
      });
      notesSlider.addClass('ready-slider');
      noteSliderSpotter(195); 
    }
})
