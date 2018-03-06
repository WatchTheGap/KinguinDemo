(function() {
  'use strict';

// *** About Island ***

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#team').click(function() {
    $('#team-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#company').click(function() {
    $('#company-popup').toggleClass('hide');
   $('#islands-wrapper').addClass('blur');
  });

  $('#ourstory').click(function() {
    $('#ourstory-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#contactus').click(function() {
    $('#contactus-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    $('#notify-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('.info-panel').click(function () {
    $(this).toggleClass('info-clicked');
    $(this).toggleClass('info-panel');
  });

// *** Info Island ***

  $('#tokens').click(function() {
    $('#tokens-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#market').click(function() {
    $('#market-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#whitepaper').click(function () {
    $('#whitepaper-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Strategy Island ***
  $('#problem-solution').click(function () {
    $('#problem-solution-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#distribution').click(function () {
    $('#distribution-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#projections').click(function () {
    $('#projections-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#roadmap').click(function () {
    $('#roadmap2-popup').toggleClass('hide');
    $('#close-x-1').removeClass('hide');
    $('#islands-wrapper').addClass('blur');
  });
  $('#close-x-1').click(function () {
    $(this).addClass('hide');
    $('#roadmap2-popup').addClass('hide');
    $('#islands-wrapper').removeClass('blur');
  });

  $('#why-now').click(function() {
    $('#why-now-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Basic ***
  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
    $('#islands-wrapper').removeClass('blur');
  });

}());
