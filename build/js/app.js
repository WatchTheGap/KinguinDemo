
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

(function() {
  'use strict';

  $('#go-btn').click(function () {
    $('#signup-popup').toggleClass('hide');
  });

  $('#signup-button-crypto').click(function () {
    $('#signup-popup').toggleClass('hide');
    $('#choose-crypto-popup').toggleClass('hide');
  });

  $('#signup-button-fiat').click(function () {
    $('#signup-popup').toggleClass('hide');
    $('#choose-fiat-popup').toggleClass('hide');
  });

  $('#crypto-continue').click(function () {
    $('#choose-crypto-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#fiat-continue').click(function () {
    $('#choose-fiat-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#kyc-continue').click(function () {
    $('#investor-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#investor-button-private').click(function () {
    $('#investor-private-popup').toggleClass('hide');
    $('#investor-popup').toggleClass('hide');
  });

  $('#investor-button-company').click(function () {
    $('#investor-company-popup').toggleClass('hide');
    $('#investor-popup').toggleClass('hide');
  });

  $('#investor-private-continue').click(function () {
    $('#aml-popup').toggleClass('hide');
    $('#investor-private-popup').toggleClass('hide');
  });

  $('#investor-company-continue').click(function () {
    $('#aml-popup').toggleClass('hide');
    $('#investor-company-popup').toggleClass('hide');
  });

  $('#aml-continue').click(function () {
    $('#aml-eth-popup').toggleClass('hide');
    $('#aml-popup').toggleClass('hide');
  });
// TODO: ADD BTC AML POPUP TRIGGER BASED ON PREVIOUS SELECTION

}());
