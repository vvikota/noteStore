var playButton = $('.toggle-play');
var track = $('.track')[0];
var accumTime = $('.time-accum');
var residueTime = $('.time-residue');
var duration = track.duration;
var progressBar = $('.progress__filled')[0];
var toggleVolume  = $('.toggle-volume');

track.onloadedmetadata = function () {
  duration = Math.round(track.duration);

  function showTimer() {

    function transformTime(time, timePlace) {
      var minutes = Math.floor(time / 60);
      var seconds = (time % 60);

      if (minutes < 10) {
        minutes = '0' + minutes;
      };

      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      var transformedTime = minutes + ':' + seconds;
      timePlace.text(transformedTime)
    }

    var currentTime = Math.round(track.currentTime);
    transformTime(currentTime, accumTime);

    var durationTrack = duration - currentTime;
    transformTime(durationTrack, residueTime);

    var percent = (currentTime / durationTrack) * 100;
    progressBar.style.width = "".concat(percent, "%");
  };

  showTimer();

  var autoPlay = setInterval(showTimer, 1000);
  clearInterval(autoPlay);

  $(document).click(function (event) {

    if (playButton.is(event.target)) {
      playButton.toggleClass('pause');

      var method = track.paused ? 'play' : 'pause';
      track[method]();

      method === 'play' ? (autoPlay = setInterval(showTimer, 1000)) :
        clearInterval(autoPlay);
    } else if (toggleVolume.is(event.target)){
      if(toggleVolume.hasClass('volume-off')){
        toggleVolume.removeClass('volume-off');
        track.volume = 1;
      } else {
        toggleVolume.addClass('volume-off');
        track.volume = 0;
      }
    }
  })
};