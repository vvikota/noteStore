if($('.choose-arrangement')){

  var button = $('.choose-arrangement__button');
  var list = $('.choose-arrangement__list .mCSB_container');

  function refreshButton(){
    var amount = list.find('li.picked').length;
    var defaultValue = $('.choose-arrangement__button').val()
 
    if (amount === 0 ){
      button.html(defaultValue);
      button.removeClass('choose-background');
    } else if(amount > 0 && button.hasClass('choose-background')){
      button.html('Выбрано(' + amount + ')')
    } else if  (amount > 0 && !button.hasClass('choose-background')){
      button.html('Выбрано(' + amount + ')');
      button.addClass('choose-background');
    }
  }

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
      refreshButton();
    }

    else if ($(event.target).is('.search-rezult-item > span')){
      $(event.target).parent().remove();
      var searchValue = $(event.target).parent().html().substr(13);
      
      list.find($('li.picked:contains('+searchValue+')')).removeClass('picked');
      
      refreshButton();
    }
  })
}
