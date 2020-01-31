var mainSlider = $('.main-slider');
var notesSlider = $('.slick-slider-notes');

if (mainSlider) {
  $(document).ready(function () {
    $('.main-slider').slick({
      dots: true,
      centerMode: true,
      infinite: true,
      variableWidth: true,
    });
  });
}

if (notesSlider) {
  $(document).ready(function () {
    $('.slick-slider-notes').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
    notesSlider.addClass('ready-slider');
  });

  var noteList = $('.note-card');

  function noteSliderSpotter(){
    
    function marginSpotter() {
      for( var i = 0; i < noteList.length; i++){
        noteList[i].style.marginRight = marginR + 'px';
      }
    }

    if (window.innerWidth <= 1320 && window.innerWidth >= 1000){ 
      var marginR = Math.round((window.innerWidth - 860 - 20) / 3); 
      marginSpotter()

    } else if (window.innerWidth <= 1000 && window.innerWidth >= 765){
      var marginR = Math.round((window.innerWidth - 75*2 - 195*3 - 20) / 2); 
      marginSpotter()

    } 
    else if (window.innerWidth <= 765 && window.innerWidth >= 630){
      var marginR = Math.round((window.innerWidth - 75*2 - 195*2 - 20)); 
      marginSpotter()
    }
  }

  $(window).resize(function(){
    noteSliderSpotter();
  })
  
  $(document).ready(function (){
    noteSliderSpotter();
  })
}


       
