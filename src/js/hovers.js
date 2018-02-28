(function() {
  'use strict';

  $('.social-icons').hover(
    function () {
      $(this).addClass('social-hover').find('.social-paths').addClass('path-hover');
    }, function () {
      $(this).removeClass('social-hover').find('.social-paths').removeClass('path-hover');
    }
  );


}());
