(function() {
  'use strict';

  $('.team-member a').click(function (e) {
    e.preventDefault();
    // if ($(this).is(':contains("read more")')) {
    //   $('.more-info-text').show();
    // }
    //
    // else
    if ($(this).is(':contains("collapse")')) {
      $('.more-info-text').hide();
      $(this).text('read more');
    } else if ($(this).is(':contains("read more")')) {
      $('.more-info-text').show();
      $(this).text('collapse');

    }
  });

}());