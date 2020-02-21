$(document).click(function (event) {
  var button = $('.js-order-product');
  
  if (button.is(event.target) && !(button).hasClass('link-to-basket')) {
    event.preventDefault();
    button.addClass('link-to-basket');
    button.text('Перейти в корзину');

  //PLAYER  
  } 
  // else if (playButton.is(event.target)){
  //   playButton.toggleClass('pause');
    
  //   var method = track.paused ? 'play' : 'pause';
  //   track[method]();

  //   var currentTime = track.currentTime;
  //  // console.log(currentTime);
  //   var duration = track.duration;
  // }
})

