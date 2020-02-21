var playButton = $('.toggle-play');
var track = $('.track')[0];
var accumTime = $('.time-accum');
var residueTime = $('.time-residue');
var duration = track.duration;

track.onloadedmetadata = function () {

  duration = Math.round(track.duration);

  function showTimer() {

    function transformTime(time, timePlace) {
      var transformedTime = Math.floor(time/60) + ':' + (time % 60);
      timePlace.text(transformedTime)
    }

    var currentTime = Math.round(track.currentTime);
    transformTime(currentTime, accumTime);

    var durationTrack = duration - currentTime;
    transformTime(durationTrack, residueTime);
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