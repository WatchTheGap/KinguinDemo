(function() {
  'use strict';

  if (($(window).height()) <= 1000 ) {
    $('.popup-wrapper').addClass('scale-pop').removeClass('popup-wrapper');
  }

  $(window).resize(function () {
  if (($(window).height()) <= 500 ) {
      $('.popup-wrapper').addClass('popup-wrapper-short').removeClass('popup-wrapper');
  } else if (($(window).height()) > 500) {
      $('.popup-wrapper-short').addClass('popup-wrapper').removeClass('popup-wrapper-short');
  }
});

  let blur = function blur() {
    $('.popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  };

  $('.popup-bg').click(function () {
    $('.popup').addClass('hide');
    $('.popup-bg').hide();
    $('#islands-wrapper').removeClass('blur');
    $('.info-clicked').addClass('info-panel').removeClass('info-clicked');
  });

// *** About Island ***

  $('.bulb').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
  });
  $('.advisor-block').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
  });
  $('.advisors-title').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
  });

  $('.team-title').click(function() {
    blur();
    $('#team-popup').removeClass('hide');
  });
  $('.figures-mobile').click(function () {
    blur();
    $('#team-popup').removeClass('hide');
  });

  $('.company-title').click(function() {
    blur();
    $('#company-popup').removeClass('hide');
  });
  $('.company-penguin').click(function () {
    blur();
    $('#company-popup').removeClass('hide');
  });

  $('.ourstory').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });
  $('.story-title').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });

  $('#contactus').click(function() {
    blur();
    $('#contactus-popup').removeClass('hide');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    blur();
    $('#notify-popup').removeClass('hide');
  });

  $('.info-panel').click(function () {
    $('.popup-bg').show();
    $(this).addClass('info-clicked').removeClass('info-panel');
  });

  $('.info-clicked').click(function () {
    $('.popup-bg').hide();
    $(this).addClass('info-panel').removeClass('info-clicked');
  });

// *** Info Island ***

  $('#tokens').click(function() {
    blur();
    $('#tokens-popup').removeClass('hide');
  });

  $('#market').click(function() {
    blur();
    $('#market-popup').removeClass('hide');
  });


// *** Strategy Island ***
  $('#problem-solution').click(function () {
    blur();
    $('#problem-solution-popup').removeClass('hide');
  });

  $('#distribution').click(function () {
    blur();
    $('#distribution-popup').removeClass('hide');
  });

  $('#projections').click(function () {
    blur();
    $('#projections-popup').removeClass('hide');
  });

  $('#roadmap').click(function () {
    blur();
    $('#roadmap2-popup').removeClass('hide');
    $('#close-x-1').removeClass('hide');
  });
  $('#close-x-1').click(function () {
    $(this).addClass('hide');
    $('#roadmap2-popup').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
    $('.popup-bg').hide();
  });

  $('#why-now').click(function() {
    blur();
    $('#why-now-popup').removeClass('hide');
  });

// *** Basic ***
  $('.close-popup').click(function(e) {
    e.preventDefault();
    $(this).closest('.popup-outer-wrapper').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
    $('.popup-bg').hide();
    $('.email-popup-bg').hide();
    $('.helper-popup-bg').hide();
    $('.helper').hide();
  });


}());
