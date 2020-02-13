
$(document).ready(function() {
  if ($('.similar__slider').length) {
    $('.similar__slider').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
  
    $('.similar__slider').addClass('ready-slider');
    noteSliderSpotter(185);

  } if ($('.double__slider').length) {
    $('.double__slider').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
    $('.double__slider').addClass('ready-slider');
    noteSliderSpotter(185);
  }
})