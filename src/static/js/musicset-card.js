var relatedSlider = $('.related-slider');
var recentlySlider = $('.recently-slider');

$(document).ready(function () {

  if (relatedSlider.length) {
    relatedSlider.slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
    noteSliderSpotter(185);

  }
  if (recentlySlider.length) {
    recentlySlider.slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
    noteSliderSpotter(185);
  }
  if ($('.radio-group input').length) {
    $('.radio-group input').change(function (event) {
      var oldPrice = $(event.target).parent().parent().find('.input-old-price').text().slice(0, -2);
      var newPrice = $(event.target).parent().parent().find('.input-new-price').text().slice(0, -2);
      var profit = oldPrice - newPrice;
      $('.order-form-profit').text('Ваша выгода: ' + profit + ' р.')
    })
  }
})
