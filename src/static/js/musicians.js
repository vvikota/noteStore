
if($('.search-input-musician') || $('.choose-year') || $('.range-price')){
  var searchHintMuz = $('.search-hint-musician'); 
  var chooseYear = $('.choose-year__button');
  var yearList = $('.choose-year__list');
  var changeYearB = $('.choose-year__button');

  $('.m-scroll-bar').mCustomScrollbar();
 
  $(document).click(function(even) {
    var searchRezult = $(event.target).html();
    var searchRezultItem = ('<div class="search-rezult-item">' + '<span></span>' + searchRezult + '</div>');

    function deleteSelected(searchText) {
      var pickedLi = yearList.find( $('li.picked:contains('+searchText+')'));
      pickedLi.removeClass('picked');
    }
      
    function refreshButton(){
      var amount = yearList.find('li.picked').length;
      if (amount === 0 ){
        changeYearB.html('Год');
        changeYearB.removeClass('choose-background');
      } else if(amount > 0 && changeYearB.hasClass('choose-background')){
        changeYearB.html('Выбрано(' + amount + ')')
      } else if  (amount > 0 && !changeYearB.hasClass('choose-background')){
        changeYearB.html('Выбрано(' + amount + ')');
        changeYearB.addClass('choose-background');
      }
    }

    if($('.search-input-musician').is(event.target) 
          && !searchHintMuz.hasClass('show')){
      searchHintMuz.addClass('show');

    } else if($(event.target).is('#mCSB_2_container > li') ){       
        $('.search-rezult-container').append(searchRezultItem);

    } else if(searchHintMuz.hasClass('show')){
      searchHintMuz.removeClass('show');

    } else if ($(event.target).is('.search-rezult-item > span')){
      $(event.target).parent().remove();
      var yearValue = $(event.target).parent().html().substr(-4 , 4);
      deleteSelected(yearValue);
      refreshButton()

    } else if(chooseYear.is(event.target) 
        &&  !yearList.hasClass('show')){
        yearList.addClass('show');
    }  else if ($(event.target).is('#mCSB_3_container > li')){
      $(event.target).addClass('picked');
      $('.search-rezult-container').append(searchRezultItem);
      refreshButton();
    } else if(yearList.hasClass('show')){
      yearList.removeClass('show');
    }
    
    else if($('.sort-rezult-button').is(event.target) 
         && !($('.sort-rezult-list')).hasClass('show')){
      $('.sort-rezult-list').addClass('show');
    }  
    
    else if($(event.target).is('.sort-rezult-list > li')){
      $('.sort-rezult-button').html($(event.target).html());
      $('.sort-rezult-list').removeClass('show');
    }
    
    else if ($('.sort-rezult-list').hasClass('show')){
      $('.sort-rezult-list').removeClass('show');
    }

    else if($('.close-alert').is(event.target) ){
      $('.alert-popup').removeClass('show')
    }

    else if ($('.alert-popup').hasClass('show') && !($('.alert-message')).is(event.target)){
      $('.alert-popup').removeClass('show')
    }
  })
}

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

  rangeControl.on('input', function (e) {
    var inputVal = $(e.target).val();

    if(inputVal.match(/^\d+$/) || inputVal.length == 0){
      
      var max = +$('.range-control--max').val();
      var min = +$('.range-control--min').val();

      if($(this).hasClass('range-control--max') && max < min){
        $('.range-control--max').val(min + 1000);
      } 
      else if ($(this).hasClass('range-control--min') && min > max){
        $('.range-control--min').val(max - 1000)
      }

     var index = ($(this).hasClass('range-control--max') == true) ? 1 : 0;
     $('.slider-range').slider("values", index, $(this).val());

    } else {
      $('.alert-popup').addClass('show');
    }
  })
}
