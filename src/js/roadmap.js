(function() {
  'use strict';

  $('.node-wrapper:contains("PROJECT")').click(function () {
    $('#roadmap-footer').find('h2').text('PROJECT START')
      .siblings('p').text('new project text in here!');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');

  });


}());
