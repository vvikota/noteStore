
$('.order__form input').on('input', function(event) {
  var iD = $(event.target).attr('id'); 

  function validateForm() {
    if(($('.js-empty').length + $('.incorrect').length) > 0){
      $('.order__form button').removeClass('active');
    } else {
      $('.order__form button').addClass('active');
    }
  }
 
  // name validate
  if($('#name').is(event.target)){
    
    if((event.target).value.length > 0){
      $(event.target).removeClass('incorrect');
      $(event.target).removeClass('js-empty');
      $('[for = '+iD+']').removeClass('show-hint');
    } else {
      $(event.target).addClass('incorrect');
      $(event.target).addClass('js-empty');
      $('[for = '+iD+']').addClass('show-hint');
    }
    validateForm()
  // tel validate  
  } else if($('#tel').is(event.target)){

    if((event.target).value.length > 0){
      $(event.target).removeClass('incorrect');
      $(event.target).removeClass('js-empty');
      $('[for = '+iD+']').removeClass('show-hint');
    } else {
      $(event.target).addClass('incorrect');
      $(event.target).addClass('js-empty');
      $('[for = '+iD+']').addClass('show-hint');
    }
    validateForm()
  // mail validate  
  } else if($('#mail').is(event.target)){
    var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if((event.target).value.length > 0){
      $(event.target).removeClass('js-empty');

      if($(event.target).val().match(regExp)){
        $(event.target).removeClass('incorrect');
        $('[for = '+iD+']').removeClass('show-hint');
      } else {
        $(event.target).addClass('js-empty');
        $('[for = '+iD+']').addClass('show-hint');
      }
    } else {
      $(event.target).addClass('incorrect');
      $(event.target).addClass('js-empty');
      $('[for = '+iD+']').addClass('show-hint');
    }
    validateForm()
  // checkbox validate  
  } else if ($('.order__form-checkbox input').is(event.target)){
    if($(event.target).prop('checked')){
      $(event.target).removeClass('js-empty');
    } else {
      $(event.target).addClass('js-empty');
    }
    validateForm()
  }
  
})