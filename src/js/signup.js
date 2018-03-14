(function() {
  'use strict';

let fiat = false;

//*** OPEN THE SIGNUP FLOW FROM MAIN SITE ***//
  $('#go-btn').click(function () {
    // $('#pre-ico-popup').removeClass('hide');
    $('#signup-popup').removeClass('hide');
    $('.popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  });

//*** INVESTOR CHOOSES CRYPTO CURRENCY ***//
//*** GO TO SELECT BTC/ETC & ENTER AMOUNT ***//
  $('#signup-button-crypto').click(function () {
    fiat = false;
    $('#signup-popup').addClass('hide');
    $('#choose-crypto-popup').removeClass('hide');
  });

//*** INVESTOR CHOOSES USD OR EUROS ***//
//*** GO TO SELECT USD/EUR & ENTER AMOUNT ***//
  $('#signup-button-fiat').click(function () {
    fiat = true;
    $('#signup-popup').addClass('hide');
    $('#choose-fiat-popup').removeClass('hide');
  });

//*** BACK BUTTON NAVIGATION***//
  $('#choose-crypto-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#choose-crypto-popup').addClass('hide');
    $('#signup-popup').removeClass('hide');
  });

  $('#choose-fiat-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#choose-fiat-popup').addClass('hide');
    $('#signup-popup').removeClass('hide');
  });

  $('#aml-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#aml-popup').addClass('hide');
    $('#choose-crypto-popup').removeClass('hide');
  });

  $('#kyc-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#kyc-popup').addClass('hide');
    if (fiat === true) {
      $('#choose-fiat-popup').removeClass('hide');
    } else if (fiat === false) {
      $('#choose-crypto-popup').removeClass('hide');
    } else {
      $('.popup').addClass('hide');
      $('#signup-popup').removeClass('hide');
    }
  });

  $('#investor-private-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#investor-private-popup').addClass('hide');
    $('#investor-popup').removeClass('hide');
  });

  $('#investor-company-popup .back-btn').click(function (e) {
    e.preventDefault();
    $('#investor-company-popup').addClass('hide');
    $('#investor-popup').removeClass('hide');
  });
  
}());
