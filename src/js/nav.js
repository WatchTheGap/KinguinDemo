(function() {
  'use strict';

  $('a .burger').click(function (e) {
    e.preventDefault();
    $('header').addClass('bg-white');
    $('.full-nav').show();
    $('.nav-x').show();
    $('.burger').hide();
    $('#islands').addClass('blur');
  });

  $('a .nav-x').click(function (e) {
    e.preventDefault();
    $('header').removeClass('bg-white');
    $('.full-nav').hide();
    $('.burger').show();
    $('.nav-x').hide();
    $('#islands').removeClass('blur');
  });


}());
