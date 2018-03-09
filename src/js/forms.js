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
        url: "http://34.242.252.61:8090/api/create-profile",
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
      console.log('inside createProfile');
    }

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


    $('#crypto-continue').click(function (e) {
      e.preventDefault();
      $('input[name=crypto-amt]').val(function () {
        donationAmt = this.value;
        localStorage.setItem('donationAmt', this.value);
      });
      $('#choose-crypto-popup').toggleClass('hide');
      $('#aml-popup').toggleClass('hide');
      console.log(localStorage, donationAmt);
    });


      $('#aml-continue').click(function (e) {
        e.preventDefault();
        $('input[name=name]').val(function () {
          name = this.value;
          localStorage.setItem('name', this.value);
        });
        $('input[name=user-email]').val(function () {
          userEmail = this.value;
          localStorage.setItem('userEmail', this.value);
        });
        $('#aml-eth-popup').toggleClass('hide');
        $('#aml-popup').toggleClass('hide');
        console.log(localStorage);
        createProfile();
      });

//*******************************************************


}());
