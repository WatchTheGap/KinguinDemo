(function() {
  'use strict';

  if (($(window).height()) <= 1000 ) {
    $('.popup-wrapper').addClass('scale-pop').removeClass('popup-wrapper');
  }

  $(window).resize(function () {
  if (($(window).height()) <= 500 ) {
      $('.popup-wrapper').addClass('popup-wrapper-short').removeClass('popup-wrapper');
  } else if (($(window).height()) > 500) {
      $('.popup-wrapper-short').addClass('popup-wrapper').removeClass('popup-wrapper-short');
  }
});

  let blur = function blur() {
    $('.popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  };

  $('.popup-bg').click(function () {
    $('.popup').addClass('hide');
    $('.popup-bg').hide();
    $('#islands-wrapper').removeClass('blur');
    $('.info-clicked').addClass('info-panel').removeClass('info-clicked');
  });

// *** About Island ***

  $('#bulb').click(function() {
    blur();
    $('#advisors-popup').toggleClass('hide');
  });

  $('.team-title').click(function() {
    blur();
    $('#team-popup').removeClass('hide');
  });
  $('.figures-mobile').click(function () {
    blur();
    $('#team-popup').removeClass('hide');
  });

  $('.company-title').click(function() {
    blur();
    $('#company-popup').toggleClass('hide');
  });
  $('.company-penguin').click(function () {
    blur();
    $('#company-popup').toggleClass('hide');
  });

  $('.ourstory').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });
  $('.story-title').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });

  $('#contactus').click(function() {
    blur();
    $('#contactus-popup').toggleClass('hide');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    blur();
    $('#notify-popup').toggleClass('hide');
  });

  $('.info-panel').click(function () {
    $('.popup-bg').show();
    $(this).addClass('info-clicked').removeClass('info-panel');
  });

  $('.info-clicked').click(function () {
    $('.popup-bg').hide();
    $(this).addClass('info-panel').removeClass('info-clicked');
  });

// *** Info Island ***

  $('#tokens').click(function() {
    blur();
    $('#tokens-popup').toggleClass('hide');
  });

  $('#market').click(function() {
    blur();
    $('#market-popup').toggleClass('hide');
  });


// *** Strategy Island ***
  $('#problem-solution').click(function () {
    blur();
    $('#problem-solution-popup').toggleClass('hide');
  });

  $('#distribution').click(function () {
    blur();
    $('#distribution-popup').toggleClass('hide');
  });

  $('#projections').click(function () {
    blur();
    $('#projections-popup').toggleClass('hide');
  });

  $('#roadmap').click(function () {
    blur();
    $('#roadmap2-popup').toggleClass('hide');
    $('#close-x-1').removeClass('hide');
  });
  $('#close-x-1').click(function () {
    $(this).addClass('hide');
    $('#roadmap2-popup').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
    $('.popup-bg').hide();
  });

  $('#why-now').click(function() {
    blur();
    $('#why-now-popup').toggleClass('hide');
  });

// *** Basic ***
  $('.close-popup').click(function(e) {
    e.preventDefault();
    $(this).closest('.popup-outer-wrapper').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
    $('.popup-bg').hide();
  });


    //***************************************************
    //EMAIL TRIGGERED POPUPS
    //***************************************************

    function getQueryParam(param) {
      var url = window.location.href;
      param = param.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (results && results[2]) {
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      } else {
        return false;
      }

    }

    $(document).ready(function () {
      var query = getQueryParam("cb");
      switch (query) {
        case "aml-eth":
          blur();
          $('#aml-eth-popup').removeClass('hide');
          break;
        case "aml-btc":
          blur();
          $('#aml-btc-popup').removeClass('hide');
          break;
        case ('kyc-usd'):
          blur();
          $('#investor-popup').removeClass('hide');
          break;
        case ('kyc-eur'):
          blur();
          $('#investor-popup').removeClass('hide');
      }
    });






    //***************************************************


}());
