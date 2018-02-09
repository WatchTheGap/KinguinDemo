(function() {
  'use strict';

    let currencyType;

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.left-select').addClass('selected')
        .siblings('.right-select').removeClass('selected');
      $('.currency-amt').find('input').attr('placeholder', 'BTC');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.right-select').addClass('selected')
      .siblings('.left-select').removeClass('selected');
      $('.currency-amt').find('input').attr('placeholder', 'ETH');

    });

    $('#USD-select').focus(function () {
      currencyType = 'USD';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.left-select').addClass('selected')
      .siblings('.right-select').removeClass('selected');
      $('.currency-amt').find('input').attr('placeholder', 'USD');

    });

    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $('.right-select').addClass('selected')
        .siblings('.left-select').removeClass('selected');
      $('.currency-amt').find('input').attr('placeholder', 'EUR');

    });


}());
