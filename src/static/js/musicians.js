if($('.sort')){
  var searchHintMain = $('.search-hint-main'); 
  var chooseButton = $('.js-choose-button');
  
  $('.m-scroll-bar').mCustomScrollbar();
 
  $(document).click(function(event) {
    var target = event.target; 
    var searchRezult = $(target).html();
    var searchRezultItem = ('<div class="search-rezult-item">' + '<span></span>' + searchRezult + '</div>');
    var parentLi = $(target).parent().parent().parent();

    function refreshButton(button, defaultValue, amount){
      if (amount === 0 ){
        button.html(defaultValue);
        button.removeClass('choose-background');
      } else if  (amount > 0){
        button.html('Выбрано(' + amount + ')');
        button.addClass('choose-background');
      }
    }

    function checkDouble(){
      var double = $('.sort-rezult-keys').find( $('.search-rezult-item:contains('+searchRezult+')'));
      if($(double).length === 0 ){
        $('.sort-rezult-keys').append(searchRezultItem);
      } 
    }

    if($('.search-input').is(target) 
       && !searchHintMain.hasClass('show')){
          searchHintMain.addClass('show'); 
    } 
    
    else if($(target).is('.mCSB_container > li') && parentLi.hasClass('search-hint-main')){      
        checkDouble();
        
    } else if  ($(target).is('.mCSB_container > li') && !parentLi.hasClass('search-hint-main')){
        checkDouble();
        
        $(target).addClass('picked');
        
        var button = parentLi.prev();
        var defaultValue = parentLi.prev().val();
        var amount = $(target).parent().find('li.picked').length;

        refreshButton(button, defaultValue, amount);
    }
    else if(searchHintMain.hasClass('show')){
      searchHintMain.removeClass('show');
    }

    else if ($('.js-choose-list').hasClass('show')){
      $('.js-choose-list').removeClass('show');
    }

     else if ($(target).is('.search-rezult-item > span')){
      $(target).parent().remove();

      var searchText = $(target).parent().html().substr(13);
      
      var desireLi = $('.mCSB_container').find( $('li.picked:contains('+searchText+')'));
          desireLi.removeClass('picked');

      var amount = desireLi.parent().find('li.picked').length;
      var button = desireLi.parent().parent().parent().prev();
      var buttonValue = button.val();

      refreshButton(button, buttonValue, amount);
    } 
    else if(chooseButton.is(event.target)){
       $(target).next().toggleClass('show')
    }  
    
    // popular and new change
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
  })
}