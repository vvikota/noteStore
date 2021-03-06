// ---- HEADER script
var portalNav = $('.portal-nav--mobile');
var shadow = $('.backdrop')
var navToogle = $('.nav-toogle');
var langChangeDesk = $('.language-change-menu--desktop');
var langChangeButDesk = $('.language-change--desktop');
var bodyWrapper = $('.body-wrapper');
var hiddenSocialMenu = $('.hidden-social-link');

$(document).ready(function () {

  $(document).click(function (event) {
    if (portalNav.hasClass('portal-nav--mobile-open') &&
      !portalNav.is(event.target) &&
      portalNav.has(event.target).length === 0) {

      portalNav.removeClass('portal-nav--mobile-open');
      shadow.removeClass('show-backdrop');

    } else if (langChangeDesk.hasClass('open-language-menu') &&
      !langChangeDesk.is(event.target) &&
      !langChangeButDesk.is(event.target) &&
      langChangeDesk.has(event.target).length === 0) {
      langChangeDesk.removeClass('open-language-menu')

    } else if (navToogle.is(event.target)) {
      event.stopPropagation();
      portalNav.addClass('portal-nav--mobile-open');
      shadow.addClass('show-backdrop');

    } else if ($('.close-mobile-menu').is(event.target)) {
      portalNav.removeClass('portal-nav--mobile-open');
      shadow.removeClass('show-backdrop');

    } else if ($('.language-change--tablet').is(event.target)) {
      $('.language-change-menu--mobile').toggleClass('open-language-menu')

    } else if (langChangeButDesk.is(event.target)) {
      langChangeDesk.toggleClass('open-language-menu');
    } else if ($('.social-link-arrow').is(event.target)) {
      event.stopPropagation();
      hiddenSocialMenu.toggleClass('hidden-link-open');
      shadow.toggleClass('show-backdrop');

    } else if (!hiddenSocialMenu.is(event.target) &&
      hiddenSocialMenu.has(event.target).length === 0 &&
      hiddenSocialMenu.hasClass('hidden-link-open')) {

      hiddenSocialMenu.removeClass('hidden-link-open');
      shadow.removeClass('show-backdrop');
    }
  })

  $(document).focusin(function (event) {
    if ($('.header-content-input').is(event.target)) {
      $('.search-hint--header').addClass('search-hint-show');
    }
  })

  $(document).focusout(function (event) {
    if ($('.header-content-input').is(event.target)) {
      $('.search-hint--header').removeClass('search-hint-show');
    }
  })

  $(window).resize(function () {
    $('.double__slider').slick('resize');

    if ($('.similar__slider').length || $('.related-slider').length || $('.recently-slider').length) {
      noteSliderSpotter(185);
    }  if ($('.slick-slider-notes').length) {
      noteSliderSpotter(195);
    };

    if (window.innerWidth >= 768 && !hiddenSocialMenu.hasClass('hidden-link-open')) {
      shadow.removeClass('show-backdrop');
    }
  })
})

$(window).on('orientationchange', function () {
  $('.double__slider').slick('resize');
});
// ---- end HEADER script