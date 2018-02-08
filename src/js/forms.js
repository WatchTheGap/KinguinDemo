(function() {
  'use strict';

    let currencyType;

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.left-select').addClass('selected')
        .siblings('.right-select').removeClass('selected');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.right-select').addClass('selected')
      .siblings('.left-select').removeClass('selected');
    });

    $('#USD-select').focus(function () {
      currencyType = 'USD';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.left-select').addClass('selected')
      .siblings('.right-select').removeClass('selected');
    });
    
    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.right-select').addClass('selected')
        .siblings('.left-select').removeClass('selected');
    });


}());
