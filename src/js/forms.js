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
    if (typeof query !== 'undefined') {
      query = query.toLowerCase();
    }
    switch (query) {
      case 'aml-eth':
      blur();
      $('#aml-eth-popup').removeClass('hide');
      break;
      case "aml-btc":
      blur();
      $('#aml-btc-popup').removeClass('hide');
      break;
      case "aml-usd":
      blur();
      $('#aml-fiat-popup').removeClass('hide');
      break;
      case "aml-eur":
      blur();
      $('#aml-fiat-popup').removeClass('hide');
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

  //******************************************************

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
      url: "https://api.kinguin.io/api/create-profile",
      type: "POST",
      data: {
        "uid": uid,
        "username": name,
        "email": userEmail,
        "currency": currencyType,
        "amount": donationAmt
      }
    });
    $('#confirmation-popup').removeClass('hide');
  }

  //*** SELECTOR BUTTONS FOR CURRENCY TYPES ***//
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
  //********************************************

  $('#crypto-continue').click(function (e) {
    e.preventDefault();
    $('input[name=crypto-amt]').val(function () {
      donationAmt = this.value;
    });
    $('#choose-crypto-popup').addClass('hide');
    // TODO: THIS RIGHT HERE NEEDS TO BE TRIGGERED BY
    // HOW MUCH MUNNIES ARE IN THE DONATION AMOUNT
    $('#aml-popup').removeClass('hide');
  });

  //*** FOR CRYPTO AMOUNT UNDER $2K ONLY ***//
  $('#aml-continue').click(function (e) {
    e.preventDefault();
    $('input[name=name]').val(function () {
      name = this.value;
    });
    $('input[name=user-email]').val(function () {
      userEmail = this.value;
    });
    createProfile();
    $('#aml-popup').addClass('hide');
  });

  //*** INVESTOR SELECTS USD/EUR, INPUTS AMOUNT ***//
  //*** FIAT ALWAYS GOES TO KYC POPUP ***//
  $('#fiat-continue').click(function () {
    $('input[name=donation-amt]').val(function () {
      donationAmt = this.value;
    });
    $('#choose-fiat-popup').addClass('hide');
    $('#kyc-popup').removeClass('hide');
  });

  //*** FOR CRYPTO OVER $2K & ALL FIAT ***//
  //*** INVESTOR INPUTS NAME & EMAIL ***//
  //*** CREATE USER PROFILE **//
  //*** CONFIRMATION POPUP, GO TO EMAIL ***//
  $('#kyc-continue').click(function () {
    $('input[name=name-kyc]').val(function () {
      name = this.value;
    });
    $('input[name=user-email-kyc]').val(function () {
      userEmail = this.value;
    });
    createProfile();
    $('#kyc-popup').addClass('hide');
  });

  //*** CLOSE CONFIRMATION POPUP ***//
  $('input[name="confirm-close"]').click(function (e) {
    e.preventDefault();
    $('#confirmation-popup').addClass('hide');
  });

  //*******************************************************
  let profileType = 'PRIVATE';
  let fullName;
  let company = 'none';
  let regID = 'none';
  let country = 0;
  let buildingNo = 'none';
  let apartmentNo = 'none';
  let streetPre = 'none';
  let street;
  let city;
  let zip;
  let postOffice = 'none';
  let identImg = 'no image';
  let addressDoc = 'no image';
  //************************************************
  //************************************************

//************************************************

$('#file-upload-submit').click(function (e) {
  e.preventDefault();
  var uid = getQueryParam("uid");
  var hash = getQueryParam("hash");
  console.log('inside file upload click');
    var element = $("#upload-test");
    if (element.length === 0 || (typeof element[0].files === 'undefined') || element[0].files.length == 0) {
      return;
    }


    var regex = /\.(\w+)$/g;
    var match = regex.exec(element[0].files[0].name);
    if (match.length < 2 || match[1].length === 0) {
      alert('upload must have a file extension');
      // $(".update_profile_error").first()[0].innerHTML = "Upload must have a file extension";
      return;
    }
    var file_ext = match[1];

    var content_types = {
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "png": "image/png",
      "webp": "image/webp"
    };

    if (typeof content_types[file_ext] === 'undefined') {
      alert('image must be jpeg or png');
      // $(".update_profile_error").first()[0].innerHTML = "Image must be a JPEG or PNG";
      return;
    }

    $.ajax({
      url: "https://api.kinguin.io/api/filestore/" + uid + "/" + hash,
      type: "POST",
      data: element[0].files[0],
      processData: false,
      contentType: content_types[file_ext]
    }).then(function (r) {
      console.log("look a thing ", r.data, r.status);
    });
  });

//************************************************
//************************************************

  let kycProfile = function kycProfile() {
    var uid = getQueryParam("uid");
    var hash = getQueryParam("hash");
    $.ajax({
      url: "https://api.kinguin.io/api/update-profile/kyc/" + uid + "/" + hash,
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        "profile_type": profileType,
        "full_name": fullName,
        "company_name": company,
        "company_reg_id": regID,
        "address": {
          "street": street,
          "street_prefix": streetPre,
          "building_no": buildingNo,
          "apartment_no": apartmentNo,
          "city": city,
          "postcode": zip,
          "post_office": postOffice,
          "country_id": country
        },
        "country_id": country,
        "uid": uid || "",
        "email": userEmail,
        "addr_verify_doc": addressDoc
      })
    });
    $('#islands-wrapper').removeClass('blur');
  };


  //*** INVESTOR SELECTS INDIVIDUAL PROFILE ***//
    $('#investor-button-private').click(function () {
      profileType = "PRIVATE";
      $('#investor-private-popup').removeClass('hide');
      $('#investor-popup').addClass('hide');
    });

    //*** INVESTOR SELECTS COMPANY PROFILE ***//
    $('#investor-button-company').click(function () {
      profileType = "BUSINESS";
      $('#investor-company-popup').removeClass('hide');
      $('#investor-popup').addClass('hide');
    });

  $('#investor-private-continue').click(function (e) {
    e.preventDefault();
    $('#full-name').val(function () {
      fullName = this.value;
    });
    $('#country').val(function () {
      country = this.value;
    });
    $('#apartment-no').val(function () {
      apartmentNo = this.value;
    });
    $('#building-no').val(function () {
      buildingNo = this.value;
    });
    $('#street').val(function () {
      street = this.value;
    });
    $('#city').val(function () {
      city = this.value;
    });
    $('#zip-code').val(function () {
      zip = this.value;
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
    $('#c-apartment-no').val(function () {
      apartmentNo = this.value;
    });
    $('#c-building-no').val(function () {
      buildingNo = this.value;
    });
    $('#c-street').val(function () {
      street = this.value;
    });
    $('#c-city').val(function () {
      city = this.value;
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
  let ethSend = 'n/a';
  let ethRec = 'n/a';
  let btcSend = 'n/a';

  let sendAML = function sendAML() {
    var uid = getQueryParam("uid");
    var hash = getQueryParam("hash");
    $.ajax({
      url: "https://api.kinguin.io/api/update-profile/aml/" + uid + "/" + hash,
      type: "PUT",
      data: {
        "addr_send_eth": ethSend,
        "addr_receive_eth": ethRec,
        "addr_send_btc": btcSend
      }
    });

    $('#islands-wrapper').removeClass('blur');
  };

  $('#aml-eth-continue').click(function (e) {
    e.preventDefault();
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
    $('#btc-send').val(function () {
      btcSend = this.value;
    });
    sendAML();
    // TODO: ADD THANK YOU POPUP
  });

  $('#aml-fiat-continue').click(function (e) {
    e.preventDefault();
    $('#fiat-eth-rec').val(function () {
      ethRec = this.value;
    });
    sendAML();
    // TODO: ADD THANK YOU POPUP
  });

}());
