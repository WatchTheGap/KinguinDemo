(function() {
  'use strict';


  let kycHelper = {
    'title': 'Know Your Customer',
    'text': 'Know Your Customer (KYC) processes have been established worldwide in order to reduce fraud, money laundering, and scams. In simpler terms: KYC is a request for proof of your identity. It’s a required security check. It’s like passing through the TSA check at an airport, just a lot more friendly and a whole lot less theatrical.'
  };

  let amlHelper = {
    'title': 'Anti-Money Laundering',
    'text': 'Kinguin is required to comply with Anti-Money Laundering (AML) rules. The purpose of AML is to detect and avoid suspicious activity including money laundering, terrorist financing, securities fraud, and market manipulation. All bad things. We don’t like bad things.'
  };

  let amlDataHelper = {
    'title': 'Enter AML Data',
    'text': 'Please enter your BTC or ETH sending and receiving addresses. This information can be found in whichever cryptocurrency wallet you happen to use (such as Coinbase). As a courtesy reminder, it is advisable to create new sending and receiving addresses for each transaction, lest your coinage fall into the figurative cracks of doom.'
  };

  let docsHelper = {
    'title': 'Identification Verification Documents',
    'text': 'We currently only accept documents in .jpg or .png format. No PDFs. As much as we love them, cat pics are not an acceptable form of identification. Uploading non-essential photographs will greatly delay your approval process and puts an unnecessary strain on our hardworking staff. We appreciate your cooperation in adhering to these guidelines.'
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

  $('#investor-private-popup .modal-body a').click(function (e) {
    e.preventDefault();
    $('.helper').show();
    $('.helper').find('h2').text(docsHelper.title).siblings('p').text(docsHelper.text);
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
