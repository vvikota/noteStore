// -------- BASKET page

if ($('.basket-main__form').length > 0) {
  var mail = $('#mail');
  var checkbox = $('.order__form-checkbox-input');
  var submitButton = $('.basket-main__agreement-button');

  $(document).ready(function () {
    $('.basket-main__form').on('input', function (event) {

      function validateOrder() {
        
        if(mail.hasClass('correct') && checkbox.hasClass('correct')){
          submitButton.addClass('order-ready');
        } else {
          submitButton.removeClass('order-ready')
        }
      }


      if (mail.is(event.target)) {

        var regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var inputValue = mail.val();

        if (inputValue.match(regExp)) {
          $(mail).addClass('correct');
        } else {
          $(mail).removeClass('correct');
        }
        validateOrder();
      } else if (checkbox.is(event.target)) {
        if ($(event.target).prop('checked')) {
          $(event.target).addClass('correct');
        } else {
          $(event.target).removeClass('correct');
        }
        validateOrder();
      }




    })
  })
}


// -------- end BASKET page