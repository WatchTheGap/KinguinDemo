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
  });

  $('#aml-eth-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
  });

  $('#aml-btc-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
  });

  $('#aml-fiat-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(amlDataHelper.title).siblings('p').text(amlDataHelper.text);
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
