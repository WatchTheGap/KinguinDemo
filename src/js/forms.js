(function() {
  'use strict';

  let hasError = false;

  let blur = function blur() {
    $('.email-popup-bg').show();
    $('#islands-wrapper').addClass('blur');
  };

  $(document).ajaxStart(function(){
      $("#loader").removeClass('hide');
  });



  //***************************************************
  //***TEXT FOR CONFIRMATION POPUPS
  //***************************************************

  let mailingList = {
    'title': 'Success!',
    'subtitle': 'Thank you for signing up to our mailing list!',
    'body': 'Please check your email and click the confirmation link to complete the process.'
  };

  let phaseOne = {
    'title': 'Success!',
    'subtitle': 'Your account has been created.',
    'body': 'Please check your email and follow the confirmation link to continue the signup process.'
  };

  let phaseTwo = {
    'title': 'Level Two Complete!',
    'subtitle': 'We have received your proof of identity documentation.',
    'body': 'Watch your email for your approval link and prepare to advance to Level Three.'
  };

  let phaseThree = {
    'title': 'Quest Complete!',
    'subtitle': 'Thank you for joining us in the Kinguin.io ICO!',
    'body': 'What happens next?'
  };

  let fileUpload = {
    'title': 'Success!',
    'subtitle': 'Your profile has been updated with your identification documents.',
    'body': 'Our KYC team is currently reviewing your credentials. Please allow 1-2 business days for the review process to be completed. You will receive notification via email of your approval status.'
  };

  //***************************************************
  //***EMAIL TRIGGERED POPUPS
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
    if (typeof query === 'string') {
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
      break;
      case ('upload'):
      blur();
      $('kyc-upload-popup').removeClass('hide');
      break;
      case('roadmap'):
      $('#roadmap2-popup').removeClass('hide');
      $('#close-x-1').removeClass('hide');
      $('.popup-bg').show();
      $('#islands-wrapper').addClass('blur');
      break;
    }

  });

  //***************************************************

  $('#notify-form').submit(function () {
    $('#mailinglist-popup').removeClass('hide');
    $('.confirm-title').text(mailingList.title);
    $('.confirm-subtitle').text(mailingList.subtitle);
    $('.confirm-body').text(mailingList.body);
  });

  //******************************************************

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  let uid = uuidv4();
  let fiat = false;
  let currencyType;
  let donationAmt = 0;
  let name;
  let userEmail;

  if (currencyType === 'BTC' || 'ETH') {
    fiat = false;
  }
  if (currencyType === 'USD' || 'EUR') {
    fiat = true;
  }

  function createProfile(userProfile) {
    if (name.length < 1 || userEmail.length < 1) {
      $('#kyc-popup .alert-msg').text('Please fill out the required fields.');
      $('input[name="user-email-kyc"]').val(userEmail);
      $('input[name="name-kyc"]').val(name);
      return;
    }


    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(userEmail).toLowerCase())) {
      $('#kyc-popup .alert-msg').text('Please enter a valid email address.');
      $('input[name="user-email-kyc"]').val(userEmail);
      $('input[name="name-kyc"]').val(name);
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
    })
    .done(function () {
      $("#loader").addClass('hide');
      $('#aml-popup').addClass('hide');
      $('#kyc-popup').addClass('hide');
      $('#confirmation-popup').removeClass('hide');
      $('.confirm-title').text(phaseOne.title);
      ('.confirm-subtitle').text(phaseOne.subtitle);
      ('.confirm-body').text(phaseOne.body);
    })
    .fail(function () {
      alert('Something went wrong! :(');
      $("#loader").addClass('hide');
    });

  }


//*** INVESTOR CHOOSES CRYPTO CURRENCY ***//
//*** GO TO SELECT BTC/ETC & ENTER AMOUNT ***//
  $('#signup-button-crypto').click(function () {
    fiat = false;
    currencyType = 'BTC'; //BTC is the default selection shown
    $('#choose-crypto-popup .currency-placeholder').text('BTC');
    $('.right-select').removeClass('selected');
    $('.left-select').addClass('selected');
    $('#signup-popup').addClass('hide');
    $('.popup-bg').hide();
    $('.email-popup-bg').show();
    $('#choose-crypto-popup').removeClass('hide');
  });

//*** INVESTOR CHOOSES USD OR EUROS ***//
//*** GO TO SELECT USD/EUR & ENTER AMOUNT ***//
  $('#signup-button-fiat').click(function () {
    fiat = true;
    currencyType = 'USD'; //USD is the default selection shown
    $('#choose-fiat-popup .currency-placeholder').text('USD');
    $('.right-select').removeClass('selected');
    $('.left-select').addClass('selected');
    $('#signup-popup').addClass('hide');
    $('.popup-bg').hide();
    $('.email-popup-bg').show();
    $('#choose-fiat-popup').removeClass('hide');
  });

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
  $('#USD-select').click(function () {
    currencyType = 'USD';
    $('.left-select').addClass('selected')
    .siblings('.right-select').removeClass('selected');
    $('.currency-placeholder').text('USD');
  });
  $('#EUR-select').click(function () {
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
    if (currencyType === 'BTC' && donationAmt < 0.4) {
      $('#choose-crypto-popup .alert-msg').text('* a minimum donation of 0.4 BTC is required.');
      return;
    }
    if (currencyType === 'BTC' && donationAmt >= 0.4) {
      $('#kyc-popup').removeClass('hide');
      $('#choose-crypto-popup').addClass('hide');
    }
    if (currencyType === 'ETH' && donationAmt < 5) {
      $('#choose-crypto-popup .alert-msg').text('* a minimum donation of 5 ETH is required.');
      return;
    }
    if (currencyType === 'ETH' && donationAmt >= 5) {
      $('#kyc-popup').removeClass('hide');
      $('#choose-crypto-popup').addClass('hide');
    }

    // if (donationAmt >= 2000) {
    //   $('#kyc-popup').removeClass('hide');
    // } else {
    //   $('#aml-popup').removeClass('hide');
    // }
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
  });

  //*** INVESTOR SELECTS USD/EUR, INPUTS AMOUNT ***//
  //*** FIAT ALWAYS GOES TO KYC POPUP ***//
  $('#fiat-continue').click(function (e) {
    e.preventDefault();
    $('input[name=donation-amt]').val(function () {
      donationAmt = this.value;
    });
    if (currencyType === 'USD' && donationAmt < 5000) {
      $('#choose-fiat-popup .alert-msg').text('* a minimum donation of $5,000 USD is required.');
      $('input[name="donation-amt"]').val(donationAmt);
      return;
    }
    if (currencyType === 'EUR' && donationAmt < 4000) {
      $('#choose-fiat-popup .alert-msg').text('* a minimum donation of €4,000 EUR is required.');
      $('input[name="donation-amt"]').val(donationAmt);
      return;
    }
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
    if ($('#tos-check').is(':checked') && $('#pp-check').is(':checked')) {
      createProfile();
    } else {
      $('#kyc-popup .alert-msg').text('* Please accept our Terms & Conditions.');
      $('input[name="user-email-kyc"]').val(userEmail);
      $('input[name="name-kyc"]').val(name);
      return;
    }
  });

  //*** OPEN THE SIGNUP FLOW FROM MAIN SITE ***//
    $('#go-btn').click(function () {
      $('#signup-popup').removeClass('hide');
      $('.popup-bg').show();
      $('#islands-wrapper').addClass('blur');
    });


  //*** BACK BUTTON NAVIGATION***//
    $('#choose-crypto-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#choose-crypto-popup').addClass('hide');
      $('#signup-popup').removeClass('hide');
    });

    $('#choose-fiat-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#choose-fiat-popup').addClass('hide');
      $('#signup-popup').removeClass('hide');
    });

    $('#aml-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#aml-popup').addClass('hide');
      $('#choose-crypto-popup').removeClass('hide');
    });

    $('#kyc-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#kyc-popup').addClass('hide');
      if (fiat === true) {
        $('#choose-fiat-popup').removeClass('hide');
      } else if (fiat === false) {
        $('#choose-crypto-popup').removeClass('hide');
      } else {
        $('#kyc-popup').addClass('hide');
        $('#signup-popup').removeClass('hide');
      }
    });

    $('#investor-private-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#investor-private-popup').addClass('hide');
      $('#investor-popup').removeClass('hide');
    });

    $('#investor-company-popup .back-btn').click(function (e) {
      e.preventDefault();
      $('#investor-company-popup').addClass('hide');
      $('#investor-popup').removeClass('hide');
    });

  //*** CLOSE CONFIRMATION POPUP ***//
  $('input[name="confirm-close"]').click(function (e) {
    e.preventDefault();
    $('#confirmation-popup').addClass('hide');
    $('#mailinglist-popup').addClass('hide');
    $('.email-popup-bg').hide();
    $('.popup-bg').hide();
    $('#islands-wrapper').removeClass('blur');
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

 var form = document.forms.namedItem("personal-data-form");

 var send = function() {
   var data = new FormData(form);

   var uid = getQueryParam("uid");
   var hash = getQueryParam("hash");

   var settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://api.kinguin.io/api/filestore/"+uid+"/"+hash,
     "method": "POST",
     "headers": {
     },
     "processData": false,
     "contentType": false,
     "mimeType": "multipart/form-data",
     "data": data
   };

   $.ajax(settings).done(function (response) {
     $("#loader").addClass('hide');
     kycProfile();
   }).fail(function () {
     alert('Something went wrong! =(');
     $("#loader").addClass('hide');
   });
   return false;
 };


 var sendFilesOnly = function() {
   //*** removed calling kycProfile() ***
   //*** added new confirmation popup after success ***
   var data = new FormData(form);

   var uid = getQueryParam("uid");
   var hash = getQueryParam("hash");

   var settings = {
     "async": true,
     "crossDomain": true,
     "url": "https://api.kinguin.io/api/filestore/"+uid+"/"+hash,
     "method": "POST",
     "headers": {
     },
     "processData": false,
     "contentType": false,
     "mimeType": "multipart/form-data",
     "data": data
   };

   $.ajax(settings).done(function (response) {
     $('#loader').addClass('hide');
     $('#kyc-upload-popup').addClass('hide');
     $('#confirmation-popup').removeClass('hide');
     $('.confirm-title').text(fileUpload.title);
     $('.confirm-subtitle').text(fileUpload.subtitle);
     $('.confirm-body').text(fileUpload.body);
     $('.popup-bg').show();
   }).fail(function () {
     alert('Something went wrong! =(');
     $("#loader").addClass('hide');
   });
   return false;
 };



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
    })
    .done(function () {
      $("#loader").addClass('hide');
      $('.popup').addClass('hide');
      $('.email-popup-bg').hide();
      $('#confirmation-popup').removeClass('hide');
      $('.confirm-title').text(phaseTwo.title);
      $('.confirm-subtitle').text(phaseTwo.subtitle);
      $('.confirm-body').text(phaseTwo.body);
      $('.popup-bg').show();
    })
    .fail(function () {
      alert('Something went wrong! :(');
      $("#loader").addClass('hide');
    });

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
      return fullName = this.value;
    });
    $('#country').val(function () {
      return country = this.value;
    });
    $('#apartment-no').val(function () {
      return apartmentNo = this.value;
    });
    $('#building-no').val(function () {
      return buildingNo = this.value;
    });
    $('#street').val(function () {
      return street = this.value;
    });
    $('#city').val(function () {
      return city = this.value;
    });
    $('#zip-code').val(function () {
      return zip = this.value;
    });

    if (country === "999") {
      console.log();
      alert("Nice try. We know you're in another castle. (You must select a country)");
      return;
    }
    if (country.length < 1) {
      alert("Please select your country");
      return;
    }

    if ((typeof fullName !== 'string') || fullName === "none" || fullName.length === 0) {
      alert("Please enter your name.");
      return;
    }
    if ((typeof buildingNo !== 'string') || buildingNo === "none" || buildingNo.length === 0) {
      alert("Please enter the building number of your address.");
      return;
    }
    if ((typeof street !== 'string') || street === "none" || street.length === 0) {
      alert("Please enter the street name of your address.");
      return;
    }
    if ((typeof city !== 'string') || city === "none" || city.length === 0) {
      alert("Please enter the city of your address..");
      return;
    }
    if ((typeof zip !== 'string') || zip === "none" || zip.length === 0) {
      alert("Please enter the zip of your address.");
      return;
    }
    if (new FormData(form).getAll("ident-img")[0].size === 0 || new FormData(form).getAll("address-doc")[0].size === 0) {
      alert("You must supply proof of identity and proof of address.");
      return;
    }
    if ((typeof apartmentNo !== 'string') || apartmentNo === "none" || apartmentNo.length === 0) {
      apartmentNo = 'none';
    }

    send();
    $('#investor-private-popup').addClass('hide');
    $('.email-popup-bg').hide();

  });

  $('#investor-company-continue').click(function (e) {
    e.preventDefault();
    $('#c-full-name').val(function () {
      return fullName = this.value;
    });
    $('#company-name').val(function () {
      return company = this.value;
    });
    $('#reg-id').val(function () {
      return regID = this.value;
    });
    $('#c-apartment-no').val(function () {
      return apartmentNo = this.value;
    });
    $('#c-building-no').val(function () {
      return buildingNo = this.value;
    });
    $('#c-street').val(function () {
      return street = this.value;
    });
    $('#c-city').val(function () {
      return city = this.value;
    });
    $('#c-zip-code').val(function () {
      return zip = this.value;
    });
    $('#c-country').val(function () {
      return country = this.value;
    });

    if ((typeof fullName !== 'string') || fullName === "none" || fullName.length === 0) {
      alert("Please enter your name.");
      return;
    }
    if ((typeof company !== 'string') || company === "none" || company.length === 0) {
      alert("Please enter a company name.");
      return;
    }
    if ((typeof regID !== 'string') || regID === "none" || regID.length === 0) {
      alert("Please enter a company registration ID.");
      return;
    }
    if ((typeof buildingNo !== 'string') || buildingNo === "none" || buildingNo.length === 0) {
      alert("Please enter the building number of your address.");
      return;
    }
    if ((typeof street !== 'string') || street === "none" || street.length === 0) {
      alert("Please enter the street name of your address.");
      return;
    }
    if ((typeof city !== 'string') || city === "none" || city.length === 0) {
      alert("Please enter the city of your address..");
      return;
    }
    if ((typeof zip !== 'string') || zip === "none" || zip.length === 0) {
      alert("Please enter the zip of your address.");
      return;
    }
    if ((typeof apartmentNo !== 'string') || apartmentNo === "none" || apartmentNo.length === 0) {
      apartmentNo = 'none';
    }

    //send();
    kycProfile();
    $('#investor-company-popup').addClass('hide');
    $('.email-popup-bg').hide();

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
    }).done(function () {
      $("#loader").addClass('hide');
      $('.popup').addClass('hide');
      $('.email-popup-bg').hide();
      $('#confirmation-popup').removeClass('hide');
      $('.confirm-title').text(phaseThree.title);
      $('.confirm-subtitle').text(phaseThree.subtitle);
      $('.confirm-body').text(phaseThree.body);
      $('.popup-bg').show();
    })
    .fail(function () {
      alert('Something went wrong! :(');
      $("#loader").addClass('hide');
    });

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
  });

  $('#aml-btc-continue').click(function (e) {
    e.preventDefault();
    $('#btc-send').val(function () {
      btcSend = this.value;
    });
    $('#btc-eth-rec').val(function () {
      ethRec = this.value;
    });
    sendAML();
  });

  $('#aml-fiat-continue').click(function (e) {
    e.preventDefault();
    $('#fiat-eth-rec').val(function () {
      ethRec = this.value;
    });
    sendAML();
  });

  //*** UPLOAD ONLY POPUP ***//

  let addDoc1;
  let idImg1;

  $('input[name="address-doc-1"]').change(function (e) {
    addDoc1 = e.target.files[0].name;
    $('label[for="address-doc-1"]').find('p').text(addDoc1);
    $(this).closest('.file-upload').addClass('upload-ready');
  });

  $('input[name="ident-img-1"]').change(function (e) {
    idImg1 = e.target.files[0].name;
    $('label[for="ident-img-1"]').find('p').text(idImg1);
    $(this).closest('.file-upload').addClass('upload-ready');
  });

  $('input[name="kyc-upload-submit"]').click(function () {
    sendFilesOnly();
  });

  //*************************//

}());
