(function() {
  'use strict';

  $('.advisor').click(function () {
    if ($(this).find('.avatar').hasClass('avatar-selected')) {
      $('.more-info-text').hide();
      $(this).find('.avatar').removeClass('avatar-selected');
    } else {
      $(this).find('.avatar').addClass('avatar-selected');
      $(this).siblings('.advisor').find('.avatar').removeClass('avatar-selected');
      $('.more-info-text').show();

      let leeName = 'John Lee';
      let leeBio = "<p>John Lee is Executive Chairman of Asia for ESL, the largest esports league in the world. In addition to his duties at ESL, he is a strategic advisor to MTGx portfolio companies for the Asia markets, and has co-founded several venture backed esports and gaming companies.</p><p>Prior to his career in esports, John was with gaming companies: Gigamedia Limited and NCsoft. Earlier i his career, John worked at Softbank Venture Capital and McKinsey & Company</p>";

      let hilgersName = 'Jens Hilgers';
      let hilgersBio = "<p>Jens is a Founding Partner of BITKRAFT Esports Ventures, the world’s first dedicated esports investment fund. He is also Co-founder and Chairman of esports team G2 Esports as well as Co-Founder and CEO of the leading big data company in esports, DOJO madness.</p> <p>Widely considered one of the Godfathers of esports, Jens started his first foray into esports in 1997 and founded ESL in 2000. As CEO for ten years, Jens grew ESL into the world's most prestigious esports brand and along with it, paved the way for esports to go mainstream.</p> <p>In 2015, international entertainment company, MTG, acquired a majority stake in ESL, marking the first acquisituin of an esports company by a traditional media organization. Since 2013, Jens has actively invested in startups with a visible focus on esports.</p>";

      let galamName = 'Elie Galam';
      let galamBio = "<p>A mathemetician and financier, Elie is Chief Investments Officer of the Eastmore Group, a hedge fund with offices in the US, Canada, Europe, Hong Kong and Japan. He received a Masters in Applied Mathematics from Harvard University and a Masters in Engineering from Ecole Centrale Paris.</p> <p>Elie is an experienced crypto investor and influencer, as well as financial advisor to Bancor, a project that raised $153MM in an ICO in June 2017 - the biggest ever at the time. Furthermore, Elie is an active investor in multiple esports companies and sits on the board of O'Gaming, the largest French language stream platform on Twitch</p>";


      let liangName = 'Callum Liang';
      let liangBio = "<p>Callum is a partner at Unity Group Private Equity and High Commissioner for the World Business Angel Forum in Singapore. Callum is a New Zealander who has started, built, bought, and sold half a dozen businesses in a range of industries across two continents. He is a director of multiple companies and is cofounder of The Marketing Group PLC, listed in Europe. Callum sits on multiple Boards of listed and private companies and is the author of two bestselling books; 'Progressive Partnerships - The FUTURE of business' and 'Agglomerate - Idea to IPO in 12 months'. Widely published he is regularly invited to speak at conferences and on television around the world. Callum has been based in Asia for nearly 20 years with the last 6 of those in Singapore, where he resides with his young family.</p>";

      let zhouName = 'Joe Zhou';
      let zhouBio = "<p>Joe is the CEO and Co-Founder at†FirstBlood, a blockchain based esports competition platform and also one of the first companies that successfully rose funding through Ethereum blockchain.</p> <p>Prior to FirstBlood, he was the Founder and CEO at†Alt-Options, the first Bitcoin options trading platform based in the US. Additionally, Joe is also an avid investor and advisor in the blockchain space. He's a partner at NewBlock Capital - an investment fund that focuses in FinTech and Blockchain -- and a chartered anti-money laundering specialist (ACAMS).</p>";

      let maarekName = 'Pierre Maarek';
      let maarekBio = "<p>Pierre is currently the head of the Equity Derivatives activities of Exane America.</p> <p>With 15 years in the industry working for the largest players (JP Morgan†in London, Natixis in Paris and now Exane in New York), he will bring his deep knowledge of the financial industry and extensive network.</p>";

      let haoName = 'Jun Hao';
      let haoBio1 = "<p>Jun Hao, also known as “Crypto JH” in the crypto community hails from Singapore and is currently one of the world’s most prominent voices in crypto. Being an early adopter of crypto, Crypto JH has been one of the pioneers of the crypto investor space and is one of the keen analysts others seek out to guide their investment decisions.</p>";
      let haoBio = haoBio1 + "<p>Crypto JH strongly believes in giving back to the community, and has a passion for teaching people how to get started in cryptocurrency to start trading. That was the main impetus that led him to start his public Telegram and YouTube presence, teaching and informing the public about crypto.</p><p>With a wide network within the Singaporean crypto-community, Crypto JH has held engagements with prominent individuals such as the CEO of the Singapore stock exchange (SGX) and many crypto/blockchain developers. He is currently also playing advisory roles for numerous ICOs. Crypto JH has also graduated with High Distinction from a top school in Asia with a Bachelors in Finance.</p>";

      let strezynskaName = 'Anna Strezynska';
      let strezynskaBio = "<p>Anna Strezynska is the former Minister of Digital Affairs in Poland (2015-2018), with the highest approval rating of any Polish politician at 80%. Much of Annaís career has been spent in public service in Poland where she worked on telecom and competition policy.</p><p>Today, Anna is the President of the Management Board for MC2. MC2 is a new technology company focused on implementation, training, and consultation of blockchain and smart technologies around the world.</p>";

      let crystalName = 'Stephen A. Crystal, ESQ';
      let crystalBio = "<p>Stephen is an attorney and investor focusing on gaming and esports.</p><p>He has spent 25 years directly involved in all aspects of the casino and gaming technology industry as well as I-Gaming and esports worldwide. As an attorney he has represented public and private gaming companies before various state regulatory bodies and jurisdictions. Stephen has also been the President and CEO of numerous casino holding and public gaming technology companies, employing thousands of employees. Lastly, Stephen is an active investor and advisor on over $2 Billion dollars of project finance and mergers and acquisitions in the casino/gaming technology/I-Gaming/esports and energy and utility spaces.</p>";

      let shulginName = 'Alexander Shulgin';
      let shulginBio = '<p>Alexander is a one of a kind Russian Siberian musician, he has composed 50+ #1 chart toppers and successfully combines creative thinking with business. He manages GRUPPA KOMPANIY FAMILIA, which specializes in blockchain, new media, publishing, and entertainment investments. Recognized as one of the world’s leading visionaries in the digital disruption of the world economy, as well as blockchain technology, the creative economy, media, entertainment and sports. Considered an expert in the crypto world, he has invested in many leading companies such as Bitfury, DotBlockchainMedia and more. Alexander is a member of the Expert Council under the Prime Minister of the Russian Federation, where he has been awarded the Order of the Medal “Professionalism and Business Reputation.” He furthermore serves as advisor to high profile crypto companies and regulators.</p>';

      if ($(this).find('h5').is(':contains("John Lee")')) {
        $('#advisors-popup .more-info-text').find('h3').text(leeName).siblings('.bio-text').empty('.bio-text').append(leeBio);
      } else if ($(this).find('h5').is(':contains("Jens Hilgers")')){
        $('#advisors-popup .more-info-text').find('h3').text(hilgersName).siblings('.bio-text').empty('.bio-text').append(hilgersBio);
      } else if ($(this).find('h5').is(':contains("Elie Galam")')) {
        $('#advisors-popup .more-info-text').find('h3').text(galamName).siblings('.bio-text').empty('.bio-text').append(galamBio);
      } else if ($(this).find('h5').is(':contains("Callum Liang")')) {
        $('#advisors-popup .more-info-text').find('h3').text(liangName).siblings('.bio-text').empty('.bio-text').append(liangBio);
      } else if ($(this).find('h5').is(':contains("Joe Zhou")')) {
        $('#advisors-popup .more-info-text').find('h3').text(zhouName).siblings('.bio-text').empty('.bio-text').append(zhouBio);
      } else if ($(this).find('h5').is(':contains("Pierre Maarek")')) {
        $('#advisors-popup .more-info-text').find('h3').text(maarekName).siblings('.bio-text').empty('.bio-text').append(maarekBio);
      } else if ($(this).find('h5').is(':contains("Anna Strezynska")')) {
        $('#advisors-popup .more-info-text').find('h3').text(strezynskaName).siblings('.bio-text').empty('.bio-text').append(strezynskaBio);
      }  else if ($(this).find('h5').is(':contains("Jun Hao")')) {
        $('#advisors-popup .more-info-text').find('h3').text(haoName).siblings('.bio-text').empty('.bio-text').append(haoBio);
      } else if ($(this).find('h5').is(':contains("Stephen Crystal")')) {
        $('#advisors-popup .more-info-text').find('h3').text(crystalName).siblings('.bio-text').empty('.bio-text').append(crystalBio);
      } else if ($(this).find('h5').is(':contains("Alexander Shulgin")')) {
        $('#advisors-popup .more-info-text').find('h3').text(shulginName).siblings('.bio-text').empty('.bio-text').append(shulginBio);
      }
    }
  });

}());

(function() {
  'use strict';

  function countdown() {

  			let endTime = new Date("30 March 2018 9:56:00");
  			endTime = (Date.parse(endTime) / 1000);

  			let now = new Date();
  			now = (Date.parse(now) / 1000);

  			let timeLeft = endTime - now;

  			let days = Math.floor(timeLeft / 86400);
  			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  			if (hours < "10") { hours = "0" + hours; }
  			if (minutes < "10") { minutes = "0" + minutes; }
  			if (seconds < "10") { seconds = "0" + seconds; }

  			$('#ico-days').text(days);
        $('#ico-hours').text(hours);
        $('#ico-minutes').text(minutes);
        $('#ico-seconds').text(seconds);

  	}

  	setInterval(function() { countdown(); }, 1000);

}());

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
      $('#kyc-upload-popup').removeClass('hide');
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
    if (name.length < 1 && userEmail.length < 1) {
      $('input[name="name-kyc"]').val(name).addClass('field-fix');
      $('input[name="user-email-kyc"]').val(userEmail).addClass('field-fix');
      $('#kyc-popup .alert-msg').text('Please fill out the required fields.');
      return;
    }
    if (name.length < 1) {
      $('#kyc-popup .alert-msg').text('Please enter your name.');
      $('input[name="user-email-kyc"]').val(userEmail);
      $('input[name="name-kyc"]').val(name).addClass('field-fix');
      return;
    }
    if (userEmail.length < 1) {
      $('#kyc-popup .alert-msg').text('Please enter your email address.');
      $('input[name="user-email-kyc"]').val(userEmail).addClass('field-fix');
      $('input[name="name-kyc"]').val(name);
      return;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(userEmail).toLowerCase())) {
      $('#kyc-popup .alert-msg').text('Please enter a valid email address.');
      $('input[name="user-email-kyc"]').val(userEmail).addCLass('field-fix');
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
      $('input[name="crypto-amt"]').val(donationAmt).addClass('field-fix');
      return;
    }
    if (currencyType === 'BTC' && donationAmt >= 0.4) {
      $('#kyc-popup').removeClass('hide');
      $('#choose-crypto-popup').addClass('hide');
    }
    if (currencyType === 'ETH' && donationAmt < 5) {
      $('#choose-crypto-popup .alert-msg').text('* a minimum donation of 5 ETH is required.');
      $('input[name="crypto-amt"]').val(donationAmt).addClass('field-fix');
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
      $('input[name="donation-amt"]').val(donationAmt).addClass('field-fix');
      return;
    }
    if (currencyType === 'EUR' && donationAmt < 4000) {
      $('#choose-fiat-popup .alert-msg').text('* a minimum donation of €4,000 EUR is required.');
      $('input[name="donation-amt"]').val(donationAmt).addClass('field-fix');
      return;
    }
    $('#choose-fiat-popup').addClass('hide');
    $('#kyc-popup').removeClass('hide');
  });

  $('input[type="text"]').click(function () {
    $(this).removeClass('field-fix');
  });
  $('input[type="email"]').click(function () {
      $(this).removeClass('field-fix');
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

 var uploadOnlyForm = document.forms.namedItem("upload-only-form");
 var sendFilesOnly = function() {
   //*** removed calling kycProfile() ***
   //*** added new confirmation popup after success ***
   var data = new FormData(uploadOnlyForm);

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
    $('input[name="full-name"]').val(function () {
      return fullName = this.value;
    });
    $('input[name="country"]').val(function () {
      return country = this.value;
    });
    $('input[name="apartment-no"]').val(function () {
      return apartmentNo = this.value;
    });
    $('input[name="building-no"]').val(function () {
      return buildingNo = this.value;
    });
    $('input[name="street"]').val(function () {
      return street = this.value;
    });
    $('input[name="city"]').val(function () {
      return city = this.value;
    });
    $('input[name="zip-code"]').val(function () {
      return zip = this.value;
    });

    if (country === "999") {
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
    $('input[name="c-full-name"]').val(function () {
      return fullName = this.value;
    });
    $('input[name="company-name"]').val(function () {
      return company = this.value;
    });
    $('input[name="reg-id"]').val(function () {
      return regID = this.value;
    });
    $('input[name="c-apartment-no"]').val(function () {
      return apartmentNo = this.value;
    });
    $('input[name="c-building-no"]').val(function () {
      return buildingNo = this.value;
    });
    $('input[name="c-street"]').val(function () {
      return street = this.value;
    });
    $('input[name="c-city"]').val(function () {
      return city = this.value;
    });
    $('input[name="c-zip-code"]').val(function () {
      return zip = this.value;
    });
    $('input[name="c-country"]').val(function () {
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
    $('input[name="fiat-eth-rec"]').val(function () {
      ethRec = this.value;
    });
    sendAML();
  });

  //*** UPLOAD BUTTON - UPLOAD READY***//
  let addDoc;
  let addDoc1;
  let idImg;
  let idImg1;

  $('input[name="address-doc"]').change(function (e) {
    addDoc = e.target.files[0].name;
    $('label[for="address-doc"]').find('p').text(addDoc);
    $(this).closest('.file-upload').addClass('upload-ready');
  });

  $('input[name="address-doc-1"]').change(function (e) {
    addDoc1 = e.target.files[0].name;
    $('label[for="address-doc-1"]').find('p').text(addDoc1);
    $(this).closest('.file-upload').addClass('upload-ready');
  });

  $('input[name="ident-img"]').change(function (e) {
    idImg = e.target.files[0].name;
    $('label[for="ident-img"]').find('p').text(idImg);
    $(this).closest('.file-upload').addClass('upload-ready');
  });

  $('input[name="ident-img-1"]').change(function (e) {
    idImg1 = e.target.files[0].name;
    $('label[for="ident-img-1"]').find('p').text(idImg1);
    $(this).closest('.file-upload').addClass('upload-ready');
  });


//*** SEND FILES ONLY ***//
  $('input[name="kyc-upload-submit"]').click(function () {
    sendFilesOnly();
  });

//*************************//


//*** AIRDROP SIGNUP ***//

  let teleEmail;
  let teleId;
  let teleRefId;
  let teleWallet;
  let kingRef = {};

  let airdrop = function airdrop() {

    $.ajax({
      url: "https://api.kinguin.io/airdrop/signup",
      type: "PUT",
      data: {
        "email": teleEmail,
        "eth_wallet": teleWallet,
        "telegram_id": teleId,
        "referred_by": teleRefId
      }
    }).done(function (response) {
      console.log(response);
      kingRef = response;
      console.log(kingRef.referral_id);
      alert('success!');
      $("#loader").addClass('hide');
      $('#airdrop-popup').addClass('hide');
      $('#referral-link-popup').removeClass('hide');
      $('.personal-airdrop-link').attr('href', 'https://kinguin.io/?airdrop-ref=' + kingRef.referral_id).find('h1').text('https://kinguin.io/?airdrop-ref=' + kingRef.referral_id);
    }).fail(function () {
      $("#loader").addClass('hide');
      alert('Something went wrong! :(');
    });
  };

  $('input[name="telegram-submit"]').click(function (e) {
    e.preventDefault();
    $('input[name="telegram-email"]').val(function () {
      teleEmail = this.value;
    });
    $('input[name="telegram-id"]').val(function () {
      teleId = this.value;
    });
    $('input[name="referral-id"]').val(function () {
      teleRefId = this.value;
    });
    $('input[name="tele-eth"]').val(function () {
      teleWallet = this.value;
    });
    airdrop();
  });

  new ClipboardJS('.clippy');



}());

(function() {
  'use strict';


  let kycHelper = {
    'title': 'Know Your Customer',
    'text': 'Know Your Customer (KYC) processes have been established worldwide in order to reduce fraud, money laundering and scams. In simpler terms: KYC is a request for proof of your identity. It’s a security check. It’s like passing through the TSA check at an airport, just a lot more friendly and a whole lot less theatrical. Unlike the TSA, we are genuinely sorry for the inconvenience, but we are required to do this.'
  };

  let amlHelper = {
    'title': 'Anti-Money Laundering',
    'text': 'Kinguin is required to comply with Anti-Money Laundering (AML) rules. The purpose of AML is to detect and avoid suspicious activity including money laundering, terrorist financing, securities fraud and market manipulation. All bad things. We don’t like bad things.'
  };

  let amlDataHelper = {
    'title': 'Enter AML Data',
    'text': 'what is aml data?'
  };


  $('#kyc-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(kycHelper.title).siblings('p').text(kycHelper.text);
    $('.helper-popup-bg').show();
  });

  $('#aml-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlHelper.title).siblings('p').text(amlHelper.text);
    $('.helper-popup-bg').show();
  });

  $('#aml-eth-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
    $('.helper-popup-bg').show();
  });

  $('#aml-btc-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
    $('.helper-popup-bg').show();
  });

  $('#aml-fiat-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
    $('.helper-popup-bg').show();
  });

  $('.helper-popup-bg').click(function () {
    $('.helper').hide();
    $('.helper-popup-bg').hide();
  });

  $('.helper-close').click(function (e) {
    e.preventDefault();
    $('.helper').hide();
    $('.helper-popup-bg').hide();
  });

}());

(function() {
  'use strict';

  $('.social-media-wrapper a').hover(
    function () {
      $(this).find('.social-icons').addClass('social-hover').find('.social-paths').addClass('path-hover');
    }, function () {
      $(this).find('.social-icons').removeClass('social-hover').find('.social-paths').removeClass('path-hover');
    }
  );

  $('.team-title').hover(
    function () {
      $(this).addClass('team-title-hover');
      $('.team').addClass('team-hover');
      $('.figures').addClass('figures-hover');
      $('.shadows').addClass('shadows-hover');
    },
    function () {
      $(this).removeClass('team-title-hover');
      $('.team').removeClass('team-hover');
      $('.figures').removeClass('figures-hover');
      $('.shadows').removeClass('shadows-hover');
    }
  );

  // $('.figures').hover(
  //   function () {
  //     $(this).addClass('figures-hover');
  //     $('.team').addClass('team-hover');
  //     $('.team-title').addClass('team-title-hover');
  //     $('.shadows').addClass('shadows-hover');
  //   },
  //   function () {
  //     $(this).removeClass('figures-hover');
  //     $('.team').removeClass('team-hover');
  //     $('.team-title').removeClass('team-title-hover');
  //     $('.shadows').removeClass('shadows-hover');
  //   }
  // );

  $('.company-title').hover(
    function () {
      $(this).addClass('company-title-hover');
      $('.company').addClass('company-hover');
      $('.company-penguin').addClass('company-penguin-hover');
    },
    function () {
      $(this).removeClass('company-title-hover');
      $('.company').removeClass('company-hover');
      $('.company-penguin').removeClass('company-penguin-hover');
    }
  );

  $('.company-penguin').hover(
    function () {
      $(this).addClass('company-penguin-hover');
      $('.company').addClass('company-hover');
      $('.company-title').addClass('company-title-hover');
    },
    function () {
      $(this).removeClass('company-penguin-hover');
      $('.company').removeClass('company-hover');
      $('.company-title').removeClass('company-title-hover');
    }
  );

  $('.story-title').hover(
    function () {
      $(this).addClass('story-title-hover');
      $('.book').addClass('book-hover');
      $('.ourstory').addClass('ourstory-hover');
    },
    function () {
      $(this).removeClass('story-title-hover');
      $('.book').removeClass('book-hover');
      $('.ourstory').removeClass('ourstory-hover');
    }
  );
  $('.book').hover(
    function () {
      $('.ourstory').addClass('ourstory-hover');
      $(this).addClass('book-hover');
      $('.story-title').addClass('story-title-hover');
    },
    function () {
      $('.ourstory').removeClass('ourstory-hover');
      $(this).removeClass('book-hover');
      $('.story-title').removeClass('story-title-hover');
    }
  );

  $('.bulb').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );
  $('.advisors-title').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );
  $('.advisor-block').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );

  $('.letter').hover(
    function () {
      $(this).addClass('letter-hover');
      $('.contactus').addClass('contactus-hover');
      $('.contact-title').addClass('contact-title-hover');
    },
    function () {
      $(this).removeClass('letter-hover');
      $('.contactus').removeClass('contactus-hover');
      $('.contact-title').removeClass('contact-title-hover');
    }
  );
  $('.contact-title').hover(
    function () {
      $('.letter').addClass('letter-hover');
      $('.contactus').addClass('contactus-hover');
      $(this).addClass('contact-title-hover');
    },
    function () {
      $('.letter').removeClass('letter-hover');
      $('.contactus').removeClass('contactus-hover');
      $(this).removeClass('contact-title-hover');
    }
  );
  $('.contactus').hover(
    function () {
      $('.letter').addClass('letter-hover');
      $(this).addClass('contactus-hover');
      $('.contact-title').addClass('contact-title-hover');
    },
    function () {
      $('.letter').removeClass('letter-hover');
      $(this).removeClass('contactus-hover');
      $('.contact-title').removeClass('contact-title-hover');
    }
  );

}());

(function() {
  'use strict';

  $('a .burger').click(function (e) {
    e.preventDefault();
    $('.popup').addClass('hide');
    $('header').addClass('bg-white');
    $('.full-nav').show();
    $('.nav-x').show();
    $('.burger').hide();
    $('#islands-wrapper').addClass('blur');
  });

  $('a .nav-x').click(function (e) {
    e.preventDefault();
    $('header').removeClass('bg-white');
    $('.full-nav').hide();
    $('.burger').show();
    $('.nav-x').hide();
    $('#islands-wrapper').removeClass('blur');
  });

  let hidePops = function hidePops() {
    $('.popup').addClass('hide');
    $('header').removeClass('bg-white');
    $('.full-nav').hide();
    $('.burger').show();
    $('.nav-x').hide();
    $('#close-x-1').addClass('hide');
  };

  $('.doc-link').click(function () {
    $('#islands-wrapper').removeClass('blur');
  });

  $('.full-nav li').click(function () {
    hidePops();
    $('.popup-bg').show();
    if ($(this).is(':contains("roadmap")')) {
      $('#roadmap2-popup').removeClass('hide');
      $('#close-x-1').removeClass('hide');
    } else if ($(this).is(':contains("tokens")')) {
      $('#tokens-popup').removeClass('hide');
    } else if ($(this).is(':contains("distribution")')) {
      $('#distribution-popup').removeClass('hide');
    } else if ($(this).is(':contains("why")')) {
      $('#why-now-popup').removeClass('hide');
    } else if ($(this).is(':contains("market")')) {
      $('#market-popup').removeClass('hide');
    } else if ($(this).is(':contains("projections")')) {
      $('#projections-popup').removeClass('hide');
    } else if ($(this).is(':contains("team")')) {
      $('#team-popup').removeClass('hide');
    } else if ($(this).is(':contains("story")')) {
      $('#ourstory-popup').removeClass('hide');
    } else if ($(this).is(':contains("company")')) {
      $('#company-popup').removeClass('hide');
    } else if ($(this).is(':contains("advisors")')) {
      $('#advisors-popup').removeClass('hide');
    } else if ($(this).is(':contains("pre-ico")')) {
      $('#signup-popup').removeClass('hide');
    } else if ($(this).is(':contains("contact")')) {
      $('#contactus-popup').removeClass('hide');
    } else {
      return;
    }


  });

}());

(function() {
  'use strict';

  let sum2013 = 'Kinguin.net comes online, the first marketplace for gamers with extra CD-keys.';
  let end2013 = '2 Million Monthly visitors, $3.5 million in turnover.';

  let sum2014 = 'International Expansion.';
  let end2014 = '$22 Million in turnover.';

  let sum2015 = 'Team Kinguin is formed.';
  let end2015 = 'International sales represent 90% of gross.';

  let sum2016 = 'Kinguin global support team grows to 100 people.';
  let end2016 = '4 Million Customers and 4,000 active merchants.';

  let sum2017 = 'Team Kinguin Performance Center in Warsaw is initiated. Expected launch in 2018.';
  let end2017 = 'Combined community savings of $150 million on Kinguin.net';

  $('.dates-row li').click(function () {
    if ($(this).is(':contains("2013")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2013);
      $('.end-year-sum').text(end2013);
    } else if ($(this).is(':contains("2014")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2014);
      $('.end-year-sum').text(end2014);
    } else if ($(this).is(':contains("2015")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2015);
      $('.end-year-sum').text(end2015);
    } else if ($(this).is(':contains("2016")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2016);
      $('.end-year-sum').text(end2016);
    } else if ($(this).is(':contains("2017")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2017);
      $('.end-year-sum').text(end2017);
    }
  });

}());

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

  $('.bulb').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
  });
  $('.advisor-block').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
  });
  $('.advisors-title').click(function() {
    blur();
    $('#advisors-popup').removeClass('hide');
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
    $('#company-popup').removeClass('hide');
  });
  $('.company-penguin').click(function () {
    blur();
    $('#company-popup').removeClass('hide');
  });

  $('.ourstory').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });
  $('.story-title').click(function() {
    blur();
    $('#ourstory-popup').removeClass('hide');
  });

  $('.contactus').click(function() {
    blur();
    $('#contactus-popup').removeClass('hide');
  });
  $('.letter').click(function () {
    blur();
    $('#contactus-popup').removeClass('hide');
  });
  $('.contact-title').click(function () {
    blur();
    $('#contactus-popup').removeClass('hide');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    blur();
    $('#notify-popup').removeClass('hide');
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
    $('#tokens-popup').removeClass('hide');
  });

  $('#market').click(function() {
    blur();
    $('#market-popup').removeClass('hide');
  });


// *** Strategy Island ***
  $('#problem-solution').click(function () {
    blur();
    $('#problem-solution-popup').removeClass('hide');
  });

  $('#distribution').click(function () {
    blur();
    $('#distribution-popup').removeClass('hide');
  });

  $('#projections').click(function () {
    blur();
    $('#projections-popup').removeClass('hide');
  });

  $('#roadmap').click(function () {
    blur();
    $('#roadmap2-popup').removeClass('hide');
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
    $('#why-now-popup').removeClass('hide');
  });

// *** Basic ***
  $('.close-popup').click(function(e) {
    e.preventDefault();
    $(this).closest('.popup-outer-wrapper').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
    $('.popup-bg').hide();
    $('.email-popup-bg').hide();
    $('.helper-popup-bg').hide();
    $('.helper').hide();
  });


}());

(function() {
  'use strict';

  $('.node-wrapper:contains("PROJECT")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('PROJECT START')
      .siblings('p').text('new project text in here!');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ANNOUNCEMENT")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ANNOUNCEMENT')
      .siblings('p').text('ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("PRE-ICO")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('PRE-ICO')
      .siblings('p').text('PRE-ICO PRE-ICO PRE-ICO PRE-ICO PRE-ICO');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ICO OPENS")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ICO OPENS')
      .siblings('p').text('ICO OPENS ICO OPENS ICO OPENS ICO OPENS ICO OPENS');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ICO CLOSES")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ICO CLOSES')
      .siblings('p').text('ICO CLOSES ICO CLOSES ICO CLOSES ICO CLOSES ICO CLOSES');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("MARKETPLACE TRANSITIONS")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('MARKETPLACE TRANSITIONS')
      .siblings('p').text('MARKETPLACE TRANSITIONS MARKETPLACE TRANSITIONS MARKETPLACE TRANSITIONS');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("COMMUNITY SHARE")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('COMMUNITY SHARE')
      .siblings('p').text('COMMUNITY SHARE COMMUNITY SHARE COMMUNITY SHARE');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("TRANSITION END")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('TRANSITION END')
      .siblings('p').text('TRANSITION END TRANSITION END TRANSITION END');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

}());

(function() {
  'use strict';

  $('.team-member a').click(function (e) {
    e.preventDefault();

    if ($(this).is(':contains("collapse")')) {
      $('.more-info-text').hide();
      $(this).text('read more');
      $($(this).parents('.team-member').find('.team-avatar').removeClass('team-active'));


    } else if ($(this).is(':contains("read more")')) {
      $('.team-member a:contains("collapse")').text('read more');
      $('.more-info-text').show();
      $(this).text('collapse');
      $($(this).parents('.team-member').find('.team-avatar').addClass('team-active'));
      $($(this).parents('.team-member').siblings().find('.team-active').removeClass('team-active'));
    }

    let viktorName = 'Viktor Wanli';
    let viktorSubtext = 'Entrepreneur and visionary for gaming and esports ecosystem since 2007.';
    let viktorBio = '<p>Founder of Kinguin.net, a leading gaming marketplace platform with 7.5 million users and $100MM annual turnover.</p> <p>CEO of Team Kinguin SA, the number one eSport organization in Poland.</p> <p>CEO of Kinguin Franchising Systems, a company created with the purpose of establishing esports hubs around the world.</p>';

    let nashatName = 'Nashat Wanli';
    let nashatSubtext = 'Entrepreneurial-spirited and pioneering technologist with over 18 years of international experience implementing technologies.';
    let nashatBio = '<p>Previous companies include VMware and Sciant. Over 8 years of experience in virtualization.</p>';

    let kimName = 'Kim Rom';
    let kimSubtext = 'Over 20 years of experience in gaming and esports.';
    let kimBio = '<p>Former Chief Marketing Officer at Steelseries, and VP of Esports at CBS Interactive.</p> <p>Co-author of several patents related to gaming and player performance.</p>';

    if ($(this).is('#viktor-bio')) {
      $('#team-popup .more-info-text').find('h3').text(viktorName).siblings('h4').text(viktorSubtext).siblings('.bio-text').empty('.bio-text').append(viktorBio);
    } else if ($(this).is('#nashat-bio')){
      $('#team-popup .more-info-text').find('h3').text(nashatName).siblings('h4').text(nashatSubtext).siblings('.bio-text').empty('.bio-text').append(nashatBio);
    } else if ($(this).is('#kim-bio')) {
      $('#team-popup .more-info-text').find('h3').text(kimName).siblings('h4').text(kimSubtext).siblings('.bio-text').empty('.bio-text').append(kimBio);
    } else {
      return;
    }

  });

}());

(function() {
  'use strict';


  let kinguinReady = "Kinguin was founded on the belief that gamers should be able to freely trade their digital property. This belief is shared by a global community of seven million gamers: by the end of 2017 Kinguin customers will have saved more than $210 million dollars on digital games and in-game items. Now it’s time to evolve the platform to the next generation.";

  let interfaceReady = "Simply put: trade doesn’t have to be boring, tedious or complex. We began work on chat bots more than a year ago and have since served thousands of customers through conversational technology - recording a groundbreaking 96% customer support satisfaction rate. It’s time to revolutionize trade.";

  let tradeReady = "A user-friendly system allows anyone to setup a trade channel and start earning money on digital products or services. Our trade bots will extend deep into the community, facilitating trade on social media platforms, where it will feel as a natural part of any gamer’s lifestyle.";

  let technologyReady = "Technology has now reached the point where global trade between gamers can be easy, secure and nearly instant thanks to blockchain and smart contracts. In just five years, the annual secondary market for digital games has gone from zero to one billion dollars. As new technologies gradually eliminate mistrust from the value chain, we believe the global market for player-to-player trade will dramatically increase.";

  let marketReady = "Online gamers naturally embrace every aspect of digital value creation, micro-transactions and monetization of virtual goods in their games. Our new marketplace will open entirely new revenue streams for the best players, value creators, and influencers - allowing them to monetize a much bigger part of the value creation they facilitate in gaming.";

  let communityReady = "As gaming transitions to a community experience, so should the marketplace of the future. As Kinguin transitions to the blockchain and smart contracts, we’re launching a new micro-service-industry for the global gaming community.";

  // TODO: pull out class toggles into separate function.
  //       previous attempts failed despite being identical
  //       to similar function in story popup.

  $('.why-btn:contains("interface")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(interfaceReady);
  });

  $('.why-btn:contains("trade")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(tradeReady);
  });

  $('.why-btn:contains("technology")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(technologyReady);
  });

  $('.why-btn:contains("market")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(marketReady);
    });

    $('.last-btn:contains("community")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');

      $(this).removeClass('last-btn').addClass('last-active');

      $('.why-info-text').find('p').text(communityReady);
    });

    $('.why-btn:contains("kinguin")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
      $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
      $(this).removeClass('why-btn').addClass('why-active');

      $('.why-info-text').find('p').text(kinguinReady);
    });

}());
