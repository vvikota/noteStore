if($('.top-description-text-more')){
  $(document).click(function(event) {
    if($(event.target).is($('.top-description-text-more'))){
      $('html,body').stop().animate({ scrollTop: $('.bottom-page-description').offset().top }, 1000);
      event.preventDefault();
    }
  })
}