(function() {
  'use strict';

    let currencyType;

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $(this).css('background-image', 'url("img/BTC1.png")')
        .css('background-color', '#ef5e5e')
          .closest('.input-wrapper')
            .css('background-color', '#ef5e5e');
      $('#ETH-select')
        .css('background-color', '#d9d9d9')
          .closest('.input-wrapper')
            .css('background-color', '#d9d9d9');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      console.log(localStorage);
      $(this).css('background-image', 'url("img/trees.png")')
        .css('background-color', '#ef5e5e')
          .closest('.input-wrapper')
            .css('background-color', '#ef5e5e');
      $('#BTC-select').css('background-color', '#d9d9d9')
          .closest('.input-wrapper')
            .css('background-color', '#d9d9d9');
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
