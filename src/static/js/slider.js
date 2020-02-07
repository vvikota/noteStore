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
    
    function marginSpotter(sliderMargin, slidesAmount) {   
        var marginR = Math.round((window.innerWidth - sliderMargin*2 - 195*slidesAmount - 20)/(slidesAmount-1) )   
        noteList.css("marginRight", marginR + 'px');
    }

    if (window.innerWidth <= 1320 && window.innerWidth >= 1000){ 
      marginSpotter(40, 4)

    } else if (window.innerWidth <= 1000 && window.innerWidth >= 765){
      marginSpotter(75, 3)

    } 
    else if (window.innerWidth <= 765 && window.innerWidth >= 630){
      marginSpotter(75,2)
    }
  }

  $(window).resize(function(){
    noteSliderSpotter();
  })
  
  $(document).ready(function (){
    noteSliderSpotter();
  })
}


       
