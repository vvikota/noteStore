var playButton = $('.toggle-play');
var track = $('.track')[0];
var accumTime = $('.time-accum');
var residueTime = $('.time-residue');
var currentTime = track.currentTime;
var duration = track.duration;

track.onloadedmetadata = function () {

  duration = Math.round(track.duration);

  function showTimer() {
    currentTime = Math.round(track.currentTime);
    accumTime.text(currentTime);
    
    residueTime.text(duration - currentTime);
  }
  var autoPlay = setInterval(showTimer, 1000);
  clearInterval(autoPlay);

  $(document).click(function (event) {

    if (playButton.is(event.target)) {

      playButton.toggleClass('pause');

      var method = track.paused ? 'play' : 'pause';
      track[method]();

      method === 'play' ? (autoPlay = setInterval(showTimer, 1000)) :
        clearInterval(autoPlay);
    }
  })

};