
$(document).ready(function() {
  if ($('.similar__slider').length) {
    $('.similar__slider').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true
    });
  
    $('.similar__slider').addClass('ready-slider');
    noteSliderSpotter(185);

  } if ($('.double__slider').length) {
    $('.double__slider').slick({
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 450,
          settings: "unslick"
        }
      ]
    });
    $('.double__slider').addClass('ready-slider');
    noteSliderSpotter(185);
  }

  $(document).click(function (event) {
    var button = $('.artist-card__text-button');
    var text = $('.artist-card__text p');
    var noteButton = $('.button-more');
    var noteContainer = $('.double__slider');


    if (button.is(event.target)) {
      event.preventDefault();
      if(text.hasClass('open-full-text')){
        text.removeClass('open-full-text');
        button.text('Раскрыть')
      } else {
        text.addClass('open-full-text');
        button.text('Свернуть')
      }

    } else if (noteButton.is(event.target)){
      event.preventDefault();
      if(noteContainer.hasClass('see-all-notes')){
        noteContainer.removeClass('see-all-notes');
        noteButton.text('Показать еще')
      } else {
        noteContainer.addClass('see-all-notes');
        noteButton.text('Свернуть')
      }
    }
  })
})