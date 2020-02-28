// -------- BASKET page
$(document).ready(function () {
  if ($('.basket-main__form').length > 0) {
    var mail = $('#mail');
    var checkbox = $('.order__form-checkbox-input');
    var submitButton = $('.basket-main__agreement-button');

    $('.basket-main__form').on('input', function (event) {
      function validateOrder() {
        if (mail.hasClass('correct') && checkbox.hasClass('correct')) {
          submitButton.addClass('order-ready');
        } else {
          submitButton.removeClass('order-ready')
        }
      };

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
  }

  if ($('.delete-product').length > 0) {

    function calculator() {
      var amountContainer = $('.basket-main__score-amount');
      var sumContainer = $('.basket-main__score-sum');
      var prices = $('.js-product-price');
      var amount = 0;
      var sum = 0;

      prices.each(function (item) {
        var price = $(this).text().slice(0, -3).replace(/\s+/g, '');
        amount = item + 1;
        sum = sum + (+price);
      })
      sum = sum.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

      amountContainer.text('Товаров (' + amount + ')');
      sumContainer.text('На сумму: ' + sum + 'р.')
    };

    calculator();

    $(document).click(function (event) {
      if ($('.delete-product').is(event.target)) {
        $(event.target).parent().parent().remove();
        calculator()
      }
    })
  }
})



// -------- end BASKET page