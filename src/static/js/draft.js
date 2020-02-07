
// $('.language-change--tablet').click(function(){
//   $('.language-change-menu--mobile').toggleClass('open-language-menu')
// })
// langChangeButDesk.click(function () {
//   langChangeDesk.toggleClass('open-language-menu')
// })
// navToogle.click(function (event){
//   event.stopPropagation();
//   portalNav.addClass('portal-nav--mobile-open');
//   shadow.addClass('show-backdrop');
// })
// $('.close-mobile-menu').click(function(){
//   portalNav.removeClass('portal-nav--mobile-open');
//   shadow.removeClass('show-backdrop');
// })
// $('.social-link-arrow').click(function(event) {
//   event.stopPropagation();
//   hiddenSocialMenu.toggleClass('hidden-link-open');
//   shadow.toggleClass('show-backdrop');
// })
// $(document).click(function(event){
//  // var hiddenSocialMenu = $('.hidden-social-link');
//   if( !hiddenSocialMenu.is(event.target)  
//       && hiddenSocialMenu.has(event.target).length === 0
//       && hiddenSocialMenu.hasClass('hidden-link-open')){

//         hiddenSocialMenu.removeClass('hidden-link-open');
//         shadow.removeClass('show-backdrop');
//   }
// })


// if($('.choose-arrangement')){

//   var button = $('.choose-arrangement__button');
//   var list = $('.choose-arrangement__list .mCSB_container');
//   var dValue = button.val()

//   function refreshButton(defaultValue){
//     var amount = list.find('li.picked').length;
    
//     if (amount === 0 ){
//       button.html(defaultValue);
//       button.removeClass('choose-background');
//     } else if(amount > 0 && button.hasClass('choose-background')){
//       button.html('Выбрано(' + amount + ')')
//     } else if  (amount > 0 && !button.hasClass('choose-background')){
//       button.html('Выбрано(' + amount + ')');
//       button.addClass('choose-background');
//     }
//   }

//   $(document).click(function(event) {
//     if($('.choose-arrangement__button').is(event.target)){
//       $('.choose-arrangement__list').toggleClass('show');
//     } else if($('.choose-arrangement__list').hasClass('show')
//         && !($('.choose-arrangement__button').is(event.target))
//         && !($(event.target).is('#mCSB_2_container > li')) ) {
//         $('.choose-arrangement__list').removeClass('show');   
//     }
    
//     else if ($(event.target).is('#mCSB_2_container > li')){
//       $(event.target).addClass('picked');
//       refreshButton(dValue);
//     }

//     else if ($(event.target).is('.search-rezult-item > span')){
//       $(event.target).parent().remove();
//       var searchValue = $(event.target).parent().html().substr(13);
      
//       list.find($('li.picked:contains('+searchValue+')')).removeClass('picked');
      
//       refreshButton(dValue);
//     }
//   })
// }