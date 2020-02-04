if($('.choose-arrangement')){

  $(document).click(function(event) {
    if($('.choose-arrangement__button').is(event.target)){
      $('.choose-arrangement__list').toggleClass('show');
    } else if($('.choose-arrangement__list').hasClass('show')
         && !($('.choose-arrangement__button').is(event.target))
         && !($(event.target).is('#mCSB_2_container > li')) ) {
          $('.choose-arrangement__list').removeClass('show');   
    }
    
    else if ($(event.target).is('#mCSB_2_container > li')){
      $(event.target).addClass('picked');
    }

    else if ($(event.target).is('.search-rezult-item > span')){
      $(event.target).parent().remove();
      var yearValue = $(event.target).parent().html().substr(-4 , 4);
      deleteSelected(yearValue);
      refreshButton()
    }
  })
}