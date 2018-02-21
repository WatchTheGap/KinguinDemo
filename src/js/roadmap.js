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
