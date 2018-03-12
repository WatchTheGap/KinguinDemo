(function() {
  'use strict';

  $('#go-btn').click(function () {
    $('#pre-ico-popup').removeClass('hide');
    $('.popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  });

  $('#signup-button-crypto').click(function () {
    $('#signup-popup').addClass('hide');
    $('#choose-crypto-popup').removeClass('hide');
  });

  $('#signup-button-fiat').click(function () {
    $('#signup-popup').addClass('hide');
    $('#choose-fiat-popup').removeClass('hide');
  });



  $('#fiat-continue').click(function () {
    $('input[name=donation-amt]').val(function () {
      localStorage.setItem('donationAmt', this.value);
    });
    $('#choose-fiat-popup').removeClass('hide');
    $('#kyc-popup').addClass('hide');
  });

  $('#kyc-continue').click(function () {
    $('input[name=name-kyc]').val(function () {
      localStorage.setItem('name', this.value);
    });
    $('input[name=user-email-kyc]').val(function () {
      localStorage.setItem('userEmail', this.value);
    });
    $('#investor-popup').removeClass('hide');
    $('#kyc-popup').addClass('hide');
    console.log(localStorage);
  });

  $('#investor-button-private').click(function () {
    $('#investor-private-popup').removeClass('hide');
    $('#investor-popup').addClass('hide');
  });

  $('#investor-button-company').click(function () {
    console.log('HALLO');
    $('#investor-company-popup').removeClass('hide');
    $('#investor-popup').addClass('hide');
  });

  $('#investor-private-continue').click(function () {
    $('#investor-private-popup').toggleClass('hide');
    $('#islands').removeClass('blur');
  });

  $('#investor-company-continue').click(function () {
    $('#investor-company-popup').toggleClass('hide');
    $('#islands').removeClass('blur');
  });


}());
