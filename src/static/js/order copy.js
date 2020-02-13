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
    var valide = false;

    // $('.order__form input[type="text"]').each(function(){
    //  // console.log($(this).val().length > 0)
    //   if ($(this).val().length > 0){
    //     valide = true;
    //   } else {
    //     valide = false
    //   }
    //  $(this).val().length > 0 ? valide=true : valide = false
      
    //  valide = $(this).val().length > 0;


    // })
    // console.log(valide)

    //console.log($('.order__form input[type=checkbox]'))

    // if($('.order__form input[type=checkbox]').prop('checked')){
    //   valide = true
    // } else {
    //   valide = false
    // }

   // console.log(`finish ${valide}`)


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
      $(event.target).removeClass('js-empty');
      $('[for = '+iD+']').removeClass('show-hint');
      formValidate()
    } else {
      $(event.target).addClass('incorrect');
      $(event.target).addClass('js-empty');
      $('[for = '+iD+']').addClass('show-hint');
      formValidate()
    }

    console.log($('.js-empty').length)
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
      $(event.target).removeClass('js-empty');
      console.log($('.js-empty').length)
    } else {
      $(event.target).addClass('incorrect');
      $(event.target).addClass('js-empty');
      console.log($('.js-empty').length)
    }
  }
})



