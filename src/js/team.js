(function() {
  'use strict';

  $('.team-member a').click(function (e) {
    e.preventDefault();
    // if ($(this).is(':contains("read more")')) {
    //   $('.more-info-text').show();
    // }
    //
    // else
    if ($(this).is(':contains("COLLAPSE")')) {
      $('.more-info-text').hide();
    } else if ($(this).is(':contains("read more")')) {
      $('.more-info-text').show();
    }

  });

}());
//
// if ($('.team-member a').closest('h5:contains("KIM")')) {
//   $('.more-info-text').html('<h1>KIM ROM</h1> <p>kim kim kim kim kim</p>');
// } else {
//   $('.more-info-text').html('<h1>not kim</h1>');
// }
