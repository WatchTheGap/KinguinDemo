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
      if (name.length < 1 || userEmail.length < 1) {
        alert('Please fill out the required fields.');
        return;
      }
      $.ajax({
        url: "http://kinguin-test.global.ssl.fastly.net/api/create-profile",
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
  let nationality;
  let address;
  let zip;
  let country;
  let identImg = 'no image';
  let addressDoc = 'no image';



  let kycProfile = function kycProfile() {
    $.ajax({
      url: 'api/update-profile/kyc/:uid',
      type: 'PUT',
      headers: {
        "Authorization": "Basic a2luZ3VpbjpLIzg3Z3VpIQ=="
      },
      data: {
        "FULL NAME": fullName,
        "COMPANY NAME": company,
        "COMPANY REG.ID": regID,
        "NATIONALITY": nationality,
        "ADDRESS": address,
        "COUNTRY": country,
        "NATIONAL ID PICTURE": identImg,
        "ADDRESS VERIFICATION DOCUMENT": addressDoc,
        "UID": 'testingUID_001',
        "EMAIL": userEmail
      }
    });
    alert('GIRL LOOKIT DAT AJAX');
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
    console.log(fullName, nationality, address, zip, country);
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
    console.log(fullName, company, regID, nationality, address, zip, country);
  });

}());
