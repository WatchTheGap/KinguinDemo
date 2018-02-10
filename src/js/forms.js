(function() {
  'use strict';

    let currencyType;
    let donationAmt;
    let name;
    let userEmail;

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      $('.left-select').addClass('selected')
        .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('BTC');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      $('.right-select').addClass('selected')
      .siblings('.left-select').removeClass('selected');
      $('.currency-placeholder').text('ETH');

    });

    $('#USD-select').focus(function () {
      currencyType = 'USD';
      localStorage.setItem('currency', currencyType);
      $('.left-select').addClass('selected')
      .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('USD');

    });

    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      localStorage.setItem('currency', currencyType);
      $('.right-select').addClass('selected')
        .siblings('.left-select').removeClass('selected');
        $('.currency-placeholder').text('EUR');

    });




    $('#choose-fiat-popup input').keypress(function (e) {
      if (e.which == 13) {
        $('#fiat-continue').click();
        console.log(localStorage);
      }
    });



    $('#aml-popup input').keypress(function (e) {
      if (e.which == 13) {
        $('#aml-continue').click();
        console.log(localStorage);
      }
    });


    $('#kyc-popup input').keypress(function (e) {
      if (e.which == 13) {
        $('#kyc-continue').click();
        console.log(localStorage);
      }
    });

}());
