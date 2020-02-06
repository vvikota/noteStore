if ($('.slider-range')) {
  $('.slider-range').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [60, 8999],
    slide: function (event, ui) {
       $('.range-control--min').val(ui.values[0]);
       $('.range-control--max').val(ui.values[1]);
     
    },
    create: function () {
      $('.range-control--min').val($('.slider-range').slider("values", 0));
      $('.range-control--max').val($('.slider-range').slider("values", 1));
    }
  })

  var rangeControl = $('.range-control');

  rangeControl.on('input', function (e) {
    var inputVal = $(e.target).val();

    if(inputVal.match(/^\d+$/) || inputVal.length == 0){
      
      var max = +$('.range-control--max').val();
      var min = +$('.range-control--min').val();

      if($(this).hasClass('range-control--max') && max < min){
        $('.range-control--max').val(min + 1000);
      } 
      else if ($(this).hasClass('range-control--min') && min > max){
        $('.range-control--min').val(max - 1000)
      }

     var index = ($(this).hasClass('range-control--max') == true) ? 1 : 0;
     $('.slider-range').slider("values", index, $(this).val());

    } else {
      $(e.target).val(inputVal.slice(0, -1));
    }
  })
}