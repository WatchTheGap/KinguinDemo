(function() {
  'use strict';

//*** OPEN THE SIGNUP FLOW FROM MAIN SITE ***//
  $('#go-btn').click(function () {
    $('#pre-ico-popup').removeClass('hide');
    $('.popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  });

//*** INVESTOR CHOOSES CRYPTO CURRENCY ***//
//*** GO TO SELECT BTC/ETC & ENTER AMOUNT ***//
  $('#signup-button-crypto').click(function () {
    $('#signup-popup').addClass('hide');
    $('#choose-crypto-popup').removeClass('hide');
  });

//*** INVESTOR CHOOSES USD OR EUROS ***//
//*** GO TO SELECT USD/EUR & ENTER AMOUNT ***//
  $('#signup-button-fiat').click(function () {
    $('#signup-popup').addClass('hide');
    $('#choose-fiat-popup').removeClass('hide');
  });


}());
