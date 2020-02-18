var relatedSlider = $('.related-slider');
var recentlySlider = $('.recently-slider');

$(document).ready(function() {
  if (relatedSlider.length) {
    relatedSlider.slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
   

  } if(recentlySlider.length) {
    recentlySlider.slick({
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true
      });
      
    }
})