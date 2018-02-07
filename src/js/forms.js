(function() {
  'use strict';

    let currencyType;

    $('#BTC-select').focus(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
    });
    $('#ETH-select').focus(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
    });
    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
    });
    $('#USD-select').focus(function () {
      currencyType = 'USD';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
    });

}());
