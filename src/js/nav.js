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
