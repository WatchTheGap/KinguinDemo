(function() {
  'use strict';

  $('.dates-row li:contains("2013")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>Wowie wow wow</p>');
    // TODO: this is probably not the best way to do this...
  });


    $('.dates-row li:contains("2014")').click(function () {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('#story-info-text').html('<p>2014</p>');
      // TODO: this is probably not the best way to do this...
    });

}());
