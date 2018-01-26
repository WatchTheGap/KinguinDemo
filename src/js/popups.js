(function() {
  'use strict';

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
  });

  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
  });

}());
