
  if($('#fullArticle')){
    $(document).click(function(event) {
      if($(event.target).is($('.top-description-text-more'))){
        $('html,body').stop().animate({ scrollTop: $('#fullArticle').offset().top }, 1000);
        e.preventDefault();
      }
    })
  }