if ($('.slider-range')) {
  $('.slider-range').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [60, 8999],
    slide: function (event, ui) {
      $('.range-control--min').val(ui.values[0]);
      $('.range-control--max').val(ui.values[1]);
    },
    create: function () {
      $('.range-control--min').val($('.slider-range').slider("values", 0));
      $('.range-control--max').val($('.slider-range').slider("values", 1));
    }
  })

  var rangeControl = $('.range-control');

  rangeControl.on('input', function (e) { // нужна проверка на число 
     
    if($(this).hasClass('range-control--max')){
       var max =  $(this).val();
       var min = $('.range-control--min').val();

      console.log(`max ${max}`);
      console.log(`min ${min}`);
      if(max < min){
        console.log('minus')
      }
    } 
    
    else if($(this).hasClass('range-control--min')){
    
      console.log($(this).val())
    }

    // var index = ($(this).hasClass('range-control--max') == true) ? 1 : 0;
    // $('.slider-range').slider("values", index, $(this).val());
  })
}

if($('.musicians-search-label')){
  $('.search-input-musician').focus(function () {
    console.log('focus')
    $('.search-hint-musician').addClass('show');
  })
  
  $('.search-input-musician').focusout(function () {
    $('.search-hint-musician').removeClass('show');
  })
}

if($('.choose-year')){
  $(document).click(function (event) {
    if($('.choose-year__button').is(event.target)){
       $('.choose-year__list').toggleClass('show');
    
    } else if($('.sort').is(event.target)){
      $('.sort-list').toggleClass('show');
    }

  })
}
