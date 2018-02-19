(function() {
  'use strict';

  $('.node-wrapper:contains("PROJECT")').click(function () {
    $('#roadmap-footer').find('h2').text('PROJECT START')
      .siblings('p').text('new project text in here!');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');

  });

  $('.node-wrapper:contains("ANNOUNCEMENT")').click(function () {
    $('#roadmap-footer').find('h2').text('ANNOUNCEMENT')
      .siblings('p').text('ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });


}());
