(function() {
  'use strict';

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('popup');
  });

  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('popup');
  });

}());
