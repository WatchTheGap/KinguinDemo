(function() {
  'use strict';

// *** About Island ***

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
  });

  $('#team').click(function() {
    $('#team-popup').toggleClass('hide');
  });

  $('#company').click(function() {
    $('#company-popup').toggleClass('hide');
  });

  $('#ourstory').click(function() {
      $('#ourstory-popup').toggleClass('hide');
  });

  $('#contactus').click(function() {
    $('#contactus-popup').toggleClass('hide');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    $('#notify-popup').toggleClass('hide');
  });


// *** Info Island ***

  $('#tokens').click(function() {
    $('#tokens-popup').toggleClass('hide');
  });

  $('#market').click(function() {
    $('#market-popup').toggleClass('hide');
  });

// *** Strategy Island ***


// *** Basic ***
  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
  });

}());
