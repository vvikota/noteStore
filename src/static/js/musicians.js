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

var searchHint = $('.search-hint-musician');

$(document).click(function(even) {
  if($('.search-input-musician').is(event.target) 
         && !searchHint.hasClass('show')){
    searchHint.addClass('show');
  } else if($(event.target).is('.search-hint-musician > li') ){
       var searchRezult = $(event.target).html();
       var searchRezultItem = ('<div class="search-rezult-item">' + '<span></span>' + searchRezult + '</div>');
       $('.search-rezult-container').append(searchRezultItem);
  } else if(searchHint.hasClass('show')){
    searchHint.removeClass('show');
  } else if ($(event.target).is('.search-rezult-item > span')){
    $(event.target).parent().remove();
  }
})

if($('.choose-year')){
  $(document).click(function (event) {
    if($('.choose-year__button').is(event.target)){
       $('.choose-year__list').toggleClass('show');
    
    } else if($('.sort-rezult-button').is(event.target)){
      $('.sort-rezult-list').toggleClass('show');
    }
  })
}