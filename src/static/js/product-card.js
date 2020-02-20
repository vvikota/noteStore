$(document).click(function (event) {
  var button = $('.js-order-product');
  var playButton = $('.toggle-play');
  var track = $('.track')[0];

  if (button.is(event.target) && !(button).hasClass('link-to-basket')) {
    event.preventDefault();
    button.addClass('link-to-basket');
    button.text('Перейти в корзину');

  } else if (playButton.is(event.target)){
    playButton.toggleClass('pause');
    
    var method = track.paused ? 'play' : 'pause';
    track[method]();

    var currentTime = parseFloat(track.currentTime);
    console.log(currentTime);
    var duration = track.duration;
  }
})

