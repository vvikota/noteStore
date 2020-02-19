var mainSlider = $('.main-slider');
var notesSlider = $('.slick-slider-notes');

function marginSpotter(slidesAmount, slideWidth) {
  var conteinerWidth = $('.js-note-card').parent().parent().parent().innerWidth();

  var marginR = Math.round((conteinerWidth - slideWidth * slidesAmount) / (slidesAmount - 1))
  $('.js-note-card').css("marginRight", marginR + 'px');
}

function noteSliderSpotter(slideWidth) {
  if (window.innerWidth <= 1320 && window.innerWidth >= 1000) {
    marginSpotter(4, slideWidth)
  } else if (window.innerWidth <= 1000 && window.innerWidth >= 765) {
    if ($('.double__slider').length || $('.related-slider').length || $('.recently-slider').length) {
      marginSpotter(3, slideWidth)
    } else {
      marginSpotter(3, slideWidth)
    }

  } else if (window.innerWidth <= 765 && window.innerWidth >= 630) {

    if ($('.double__slider').length) {
      marginSpotter(3, slideWidth)
    } else {
      marginSpotter(2, slideWidth)
    }
  } else if (window.innerWidth <= 630 && window.innerWidth >= 550) {
    if ($('.double__slider').length || relatedSlider.length || recentlySlider.length) {
      marginSpotter(2, slideWidth)
    }
  } else if (window.innerWidth <= 550 && window.innerWidth >= 450) {
    if ($('.double__slider').length) {
      marginSpotter(2, slideWidth)
    }
  }
}

$(document).ready(function () {
  if (mainSlider.length) {
    $('.main-slider').slick({
      dots: true,
      centerMode: true,
      infinite: true,
      variableWidth: true,
    })

  }
  if (notesSlider.length) {
    $('.slick-slider-notes').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
    notesSlider.addClass('ready-slider');
    noteSliderSpotter(195);
  }
})