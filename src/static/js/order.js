
var submitButton = $('.order__form button');

submitButton.click(function(event){
  event.preventDefault();

  if (submitButton.hasClass('active')){
    console.log("click");
  } else {
    console.log("erorr");
  }
})

$('.order__form-checkbox input').change(function(){
  if(this.checked) {
    submitButton.addClass('active');
  } else {
    submitButton.removeClass('active');
  }
})

$('.order__form input').on('input', function(event) {
  
  function validateValue(validateRule){
    var iD = $(event.target).attr('id');

    if (validateRule){
      $(event.target).removeClass('incorrect');
      $('[for = '+iD+']').removeClass('show-hint');
      
    } else {
      $(event.target).addClass('incorrect');
      $('[for = '+iD+']').addClass('show-hint');
    }
  }

  if($('#name').is(event.target)){
    validateRule = (event.target).value.length > 0;
    validateValue(validateRule);

  } else if ($('#tel').is(event.target)){
     
    // нужна проверка и маска
    validateRule = (event.target).value.length > 0;
    validateValue(validateRule);

  } else if ($('#mail').is(event.target)){
    var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    validateRule = $(event.target).val().match(regExp);

    validateValue(validateRule);
  }
})

function formValidate(){
  console.log('start')
  if($('.order__form-checkbox input').prop('checked')){
    console.log('chekeder')
  }
}

formValidate();