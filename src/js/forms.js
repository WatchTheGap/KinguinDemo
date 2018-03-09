(function() {
  'use strict';

  $('#notify-form').submit(function () {
    alert('Success!');
  });

  $('.currency-form', '#signup-form', '#personal-data-form', '#company-data-form', '#funding-form', '#bank-info-form').submit(function (e) {
    e.preventDefault();
  });

    let currencyType;
    let donationAmt = 0;
    let name;
    let userEmail;


    function createProfile(userProfile) {
      $.ajax({
        url: "http://kinguin-test.global.ssl.fastly.net/api/create-profile",
        type: "POST",
        headers: {
          "Authorization": "Basic a2luZ3VpbjpLIzg3Z3VpIQ=="
        },
        data: {
          "uid": name + "1234",
          "username": name,
          "email": userEmail,
          "currency": currencyType,
          "amount": donationAmt
        }
      });
    }

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      $('.left-select').addClass('selected')
        .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('BTC');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      $('.right-select').addClass('selected')
      .siblings('.left-select').removeClass('selected');
      $('.currency-placeholder').text('ETH');

    });

    $('#USD-select').focus(function () {
      currencyType = 'USD';
      $('.left-select').addClass('selected')
      .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('USD');

    });

    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      $('.right-select').addClass('selected')
        .siblings('.left-select').removeClass('selected');
        $('.currency-placeholder').text('EUR');

    });


    $('#crypto-continue').click(function (e) {
      e.preventDefault();
      $('input[name=crypto-amt]').val(function () {
        donationAmt = this.value;
      });
      $('#choose-crypto-popup').toggleClass('hide');
      $('#aml-popup').toggleClass('hide');
    });


      $('#aml-continue').click(function (e) {
        e.preventDefault();
        $('input[name=name]').val(function () {
          name = this.value;
        });
        $('input[name=user-email]').val(function () {
          userEmail = this.value;
        });
        $('#aml-eth-popup').toggleClass('hide');
        $('#confirmation-popup').removeClass('hide');
        createProfile();
      });


      $('input[name="confirm-close"]').click(function (e) {
        e.preventDefault();
        $('#confirmation-popup').addClass('hide');
      });
//*******************************************************


}());
