
//---- ORDER page
var submitButton = $('.order__form button');

function validateForm() {
  if (($('.js-empty').length + $('.incorrect').length)) {
    submitButton.removeClass('active');
  } else {
    submitButton.addClass('active');
  }
}

function correctValue() {
  $(event.target).removeClass('incorrect');
  $(event.target).removeClass('js-empty');
  $('[for = ' + $(event.target).attr('id') + ']').removeClass('show-hint');
}

function incorrectValue() {
  $(event.target).addClass('incorrect');
  $(event.target).addClass('js-empty');
  $('[for = ' + $(event.target).attr('id') + ']').addClass('show-hint');
}

$(document).ready(function () {
  $('.order__form input').on('input', function (event) {
    var iD = $(event.target).attr('id');

    // name validate
    if ($('#name').is(event.target)) {
      if ((event.target).value.length > 0) {
        correctValue()
      } else {
        incorrectValue()
      }
      validateForm()
    }

    // mail validate  
    else if ($('#mail').is(event.target)) {
      var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if ((event.target).value.length > 0) {
        $(event.target).removeClass('js-empty');

        if (!($(event.target).val().match(regExp))) {
          incorrectValue()
        } else {
          $(event.target).removeClass('incorrect');
          $('[for = ' + iD + ']').removeClass('show-hint');
        }
      } else {
        incorrectValue()
      }
      validateForm()

      // checkbox validate  
    } else if ($('.order__form-checkbox input').is(event.target)) {
      if ($(event.target).prop('checked')) {
        $(event.target).removeClass('js-empty');
      } else {
        $(event.target).addClass('js-empty');
      }
      validateForm()
    }
  })

  $(document).click(function (event) {
    if (submitButton.is(event.target)) {
      event.preventDefault();

      if (submitButton.hasClass('active')) {
        $('.order__form-accept').addClass('show')
      } else {
        return false
      }
    }
  })

  // tel mask
  if ($('#tel').length) {
    $('#tel').mask("+7 (999) 999-99-99", {
      completed: function () {
        $('#tel').removeClass('js-empty')
      }
    })
  }
})
//--- end ORDER page