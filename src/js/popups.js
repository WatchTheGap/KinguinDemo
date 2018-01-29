(function() {
  'use strict';

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
  });

  $('#team').click(function() {
    $('#team-popup').toggleClass('hide');
  });

  $('#company').click(function() {
    $('#company-popup').toggleClass('hide');
  });

  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
  });

}());
