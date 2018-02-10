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



    //
    // $('#choose-fiat-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#fiat-continue').click();
    //     console.log(localStorage);
    //   }
    // });
    //
    //
    //
    // $('#aml-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#aml-continue').click();
    //     console.log(localStorage);
    //   }
    // });
    //
    //
    // $('#kyc-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#kyc-continue').click();
    //     console.log(localStorage);
    //   }
    // });

}());


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
    $('input[name=crypto-amt]').val(function () {
      localStorage.setItem('donationAmt', this.value);
    });
    $('#choose-crypto-popup').toggleClass('hide');
    $('#aml-popup').toggleClass('hide');
  });

  $('#fiat-continue').click(function () {
    $('input[name=donation-amt]').val(function () {
      localStorage.setItem('donationAmt', this.value);
    });
    $('#choose-fiat-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#kyc-continue').click(function () {
    $('input[name=name-kyc]').val(function () {
      localStorage.setItem('name', this.value);
    });
    $('input[name=user-email-kyc]').val(function () {
      localStorage.setItem('userEmail', this.value);
    });
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
    $('#investor-private-popup').toggleClass('hide');
  });

  $('#investor-company-continue').click(function () {
    $('#investor-company-popup').toggleClass('hide');
  });

  $('#aml-continue').click(function () {
    $('input[name=name]').val(function () {
      localStorage.setItem('name', this.value);
    });
    $('input[name=user-email]').val(function () {
      localStorage.setItem('userEmail', this.value);
    });
    $('#aml-eth-popup').toggleClass('hide');
    $('#aml-popup').toggleClass('hide');
  });

}());
