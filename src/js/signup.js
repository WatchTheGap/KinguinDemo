(function() {
  'use strict';

  $('#go-btn').click(function() {
    $('#signup-popup').toggleClass('hide');
  });

  $('#signup-button-crypto').click(function() {
    $('#signup-popup').toggleClass('hide');
    $('#choose-crypto-popup').toggleClass('hide');
  });

  $('#signup-button-fiat').click(function() {
    $('#signup-popup').toggleClass('hide');
    $('#choose-fiat-popup').toggleClass('hide');
  });

}());
