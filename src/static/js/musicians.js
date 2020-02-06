if($('.sort-js')){
  var searchHintMuz = $('.search-hint-musician'); 
  var chooseButton = $('.choose-button-js');
  
  $('.m-scroll-bar').mCustomScrollbar();
 
  $(document).click(function(event) {
    var chooseList = $('.choose-list-js .mCSB_container');
    var target = event.target; 
    var searchRezult = $(target).html();
    var searchRezultItem = ('<div class="search-rezult-item">' + '<span></span>' + searchRezult + '</div>');
    var parentLi = $(target).parent().parent().parent();

    // function refreshButton(amount, chooseButton){
    //   // var amount = chooseList.find('li.picked').length;
    //   // var defaultValue = chooseButton.val();

    //   if (amount === 0 ){
    //     chooseButton.html(defaultValue);
    //     chooseButton.removeClass('choose-background');
    //   } else if  (amount > 0){
    //     chooseButton.html('Выбрано(' + amount + ')');
    //     chooseButton.addClass('choose-background');
    //   }
    // }

    if($('.search-input-musician').is(target) 
       && !searchHintMuz.hasClass('show')){
          searchHintMuz.addClass('show');
    } 
    
    else if($(target).is('.mCSB_container > li') && parentLi.hasClass('search-hint-musician')){      
        $('.search-rezult-container').append(searchRezultItem);
        
    } else if  ($(target).is('.mCSB_container > li') && !parentLi.hasClass('search-hint-musician')){
        $('.search-rezult-container').append(searchRezultItem);
        $(target).addClass('picked');
        
        // var button = parentLi.prev();
        // var defaultValue = parentLi.prev().val();
        // var amount = $(target).parent().find('li.picked').length;

        // if (amount === 0 ){
        //   button.html(defaultValue);
        //   button.removeClass('choose-background');
        // } else if  (amount > 0){
        //   button.html('Выбрано(' + amount + ')');
        //   button.addClass('choose-background');
        // }
    }
    else if(searchHintMuz.hasClass('show')){
      searchHintMuz.removeClass('show');
    }
     else if ($(target).is('.search-rezult-item > span')){
      $(target).parent().remove();
     
      var searchText = $(target).parent().html().substr(13);
      chooseList.find( $('li.picked:contains('+searchText+')')).removeClass('picked');
      //console.log(parentLi);
     // refreshButton();
    } 
    else if(chooseButton.is(event.target)){
       $(target).next().toggleClass('show')
    }  

    else if ($('.choose-list-js').hasClass('show')){
      $('.choose-list-js').removeClass('show');
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

    // range price
    // else if($('.close-alert').is(event.target) ){
    //   $('.alert-popup').removeClass('show')
    // }

    // else if ($('.alert-popup').hasClass('show') && !($('.alert-message')).is(event.target)){
    //   $('.alert-popup').removeClass('show')
    // }
  })
}


