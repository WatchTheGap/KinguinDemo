(function() {
  'use strict';

  $('.social-media-wrapper a').hover(
    function () {
      $(this).find('.social-icons').addClass('social-hover').find('.social-paths').addClass('path-hover');
    }, function () {
      $(this).find('.social-icons').removeClass('social-hover').find('.social-paths').removeClass('path-hover');
    }
  );
  
}());
