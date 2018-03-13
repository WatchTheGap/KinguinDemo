(function() {
  'use strict';

  let hasError = false;

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
    var query = getQueryParam('cb');
    switch (query.toLowerCase()) {
      case 'aml-eth':
      blur();
      $('#aml-eth-popup').removeClass('hide');
      break;
      case "aml-btc":
      blur();
      $('#aml-btc-popup').removeClass('hide');
      break;
      case ('kyc-eth'):
      blur();
      $('#investor-popup').removeClass('hide');
      break;
      case ('kyc-btc'):
      blur();
      $('#investor-popup').removeClass('hide');
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

  $('#notify-form').submit(function () {
    alert('Success!');
    // TODO: REPLACE THIS WITH A BETTER MESSAGE AND OR CUSTOM POPUP
  });

  $('.currency-form', '#signup-form', '#personal-data-form', '#company-data-form', '#funding-form', '#bank-info-form').submit(function (e) {
    e.preventDefault();
  });

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  let uid = uuidv4();

  let currencyType = 'ETH';
  let donationAmt = 0;
  let name;
  let userEmail;

  function createProfile(userProfile) {
    if (name.length < 1 || userEmail.length < 1) {
      alert('Please fill out the required fields.');
      return;
    }
    $.ajax({
      url: "https://api.kinguin.io/api/create-profile/aml",
      type: "POST",
      data: {
        "uid": uid,
        "username": name,
        "email": userEmail,
        "currency": currencyType,
        "amount": donationAmt
      }
    })
    .done(function handleResponse(response) {
      alert('profile creation successful');
      return response.data;
    })
    .error( function handleError(err) {
      hasError = true;
      alert(err.status, ' create profile failed');
    });
    $('#confirmation-popup').removeClass('hide');
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
    $('#choose-crypto-popup').addClass('hide');
    $('#aml-popup').removeClass('hide');
  });


  $('#aml-continue').click(function (e) {
    e.preventDefault();
    $('input[name=name]').val(function () {
      name = this.value;
    });
    $('input[name=user-email]').val(function () {
      userEmail = this.value;
    });
    $('#aml-eth-popup').addClass('hide');
    createProfile();
    $('#aml-popup').addClass('hide');
  });


  $('input[name="confirm-close"]').click(function (e) {
    e.preventDefault();
    $('#confirmation-popup').addClass('hide');
  });
  //*******************************************************

  let fullName;
  let company = 'none';
  let regID = 'none';
  let address = {};
  let zip;
  let country;
  let identImg = 'no image';
  let addressDoc = 'no image';

  let fileUpload = function fileUpload() {
    $.ajax({
      url: "https://api.kinguin.io/api/filestore/" + uid + "/" + hash,
      type: "POST",
      data: {
        "addr_verify_doc": addressDoc
      }
    })
    .done(function handleResponse(response) {
      alert('file upload success');
      return response.data;
    })
    .error(function handleError(err) {
      hasError = true;
      alert(err.status, ' file upload failed');
      return err.status;
    });
  };

  let kycProfile = function kycProfile() {
    var uid = getQueryParam("uid");
    var hash = getQueryParam("hash");
    $.ajax({
      url: "https://api.kinguin.io/api/update-profile/kyc/" + uid + "/" + hash,
      type: "PUT",
      data: {
        "full_name": fullName,
        "company_name": company,
        "company_reg_id": regID,
        "address": address,
        "country_id": country,
        "uid": uid || "",
        "email": userEmail
      }
    })
    .done(function handleResponse(response) {
      fileUpload();
      alert('profile update success');
      return response.data;
    })
    .error(function handleError(err) {
      hasError = true;
      alert(err.status, ' profile update failed');
      return err.status;
    });
    $('#islands-wrapper').removeClass('blur');
  };


  $('#investor-private-continue').click(function (e) {
    e.preventDefault();
    $('#full-name').val(function () {
      fullName = this.value;
    });
    $('#nationality').val(function () {
      nationality = this.value;
    });
    $('#address').val(function () {
      address = this.value;
    });
    $('#zip-code').val(function () {
      zip = this.value;
    });
    $('#country').val(function () {
      country = this.value;
    });
    kycProfile();
  });

  $('#investor-company-continue').click(function (e) {
    e.preventDefault();
    $('#c-full-name').val(function () {
      fullName = this.value;
    });
    $('#company-name').val(function () {
      company = this.value;
    });
    $('#reg-id').val(function () {
      regID = this.value;
    });
    $('#c-nationality').val(function () {
      nationality = this.value;
    });
    $('#c-address').val(function () {
      address = this.value;
    });
    $('#c-zip-code').val(function () {
      zip = this.value;
    });
    $('#c-country').val(function () {
      country = this.value;
    });
    kycProfile();
  });

  let ethEmail;
  let btcEmail;
  let ethSend;
  let ethRec = 'n/a';
  let btcSend = 'n/a';

  let sendAML = function sendAML() {
    var uid = getQueryParam("uid");
    var hash = getQueryParam("hash");
    $.ajax({
      url: "https://api.kinguin.io/api/update-profile" + uid + "/" + hash,
      type: "PUT",
      data: {
        "addr_send_eth": ethSend,
        "addr_receive_eth": ethRec,
        "addr_send_btc": btcSend
      }
    })
    .done(function handleResponse(response) {
      alert('AML SUCCESS');
      return response.data;
    })
    .error(function handleError(err) {
      hasError = true;
      alert(err.status, ' amp send failed');
      return err.status;
    });
    $('#islands-wrapper').removeClass('blur');
  };

  $('#aml-eth-continue').click(function (e) {
    e.preventDefault();
    $('#eth-email').val(function () {
      ethEmail = this.value;
    });
    $('#eth-send').val(function () {
      ethSend = this.value;
    });
    $('#eth-rec').val(function () {
      ethRec = this.value;
    });
    sendAML();
    // TODO: ADD THANK YOU POPUP
  });

  $('#aml-btc-continue').click(function (e) {
    e.preventDefault();
    $('#btc-email').val(function () {
      btcEmail = this.value;
    });
    $('#btc-send').val(function () {
      btcSend = this.value;
    });
    sendAML();
    // TODO: ADD THANK YOU POPUP
  });

}());
