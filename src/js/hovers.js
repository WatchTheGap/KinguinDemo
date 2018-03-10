(function() {
  'use strict';

  $('.social-media-wrapper a').hover(
    function () {
      $(this).find('.social-icons').addClass('social-hover').find('.social-paths').addClass('path-hover');
    }, function () {
      $(this).find('.social-icons').removeClass('social-hover').find('.social-paths').removeClass('path-hover');
    }
  );

  $('.team-title').hover(
    function () {
      $(this).addClass('team-title-hover');
      $('.team').addClass('team-hover');
      $('.figures').addClass('figures-hover');
      $('.shadows').addClass('shadows-hover');
    },
    function () {
      $(this).removeClass('team-title-hover');
      $('.team').removeClass('team-hover');
      $('.figures').removeClass('figures-hover');
      $('.shadows').removeClass('shadows-hover');
    }
  );

}());
