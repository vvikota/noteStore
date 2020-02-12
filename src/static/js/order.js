// собрать в документ все клики

var submitButton = $('.order__form button');

submitButton.click(function(event){
  event.preventDefault();

  if (submitButton.hasClass('active')){
    console.log("click");
  } else {
    console.log("erorr");
  }
})



$('.order__form input').on('input', function(event) {
  
  function formValidate(){
    // console.log($('.incorrect').length)
    $('.order__form input').each(function(){
     // var text = $(event.target).text();
      console.log(this)
    })
    // console.log($('.order__form input').val())

    //  if($('.incorrect').length === 0){
    //   submitButton.addClass('active');
    //  } else {
    //   submitButton.removeClass('active');
    //  }
  }

  
  function validateValue(validateRule){
    var iD = $(event.target).attr('id');

    if (validateRule){
      $(event.target).removeClass('incorrect');
      $('[for = '+iD+']').removeClass('show-hint');
      formValidate()
    } else {
      $(event.target).addClass('incorrect');
      $('[for = '+iD+']').addClass('show-hint');
      formValidate()
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
  } else if ($('.order__form-checkbox input').is(event.target)){
    if(this.checked) {
      $(event.target).removeClass('incorrect');
    } else {
      $(event.target).addClass('incorrect');
    }
  }
})



