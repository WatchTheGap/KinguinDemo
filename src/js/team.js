(function() {
  'use strict';

  $('.team-member a').click(function (e) {
    e.preventDefault();

    if ($(this).is(':contains("collapse")')) {
      $('.more-info-text').hide();
      $(this).text('read more');
      $($(this).parents('.team-member').find('.team-avatar').removeClass('team-active'));


    } else if ($(this).is(':contains("read more")')) {
      $('.team-member a:contains("collapse")').text('read more');
      $('.more-info-text').show();
      $(this).text('collapse');
      $($(this).parents('.team-member').find('.team-avatar').addClass('team-active'));
      $($(this).parents('.team-member').siblings().find('.team-active').removeClass('team-active'));
    }

    if($(this).is('#kim-bio')) {
      $('#team-popup .more-info-text').text('kim');
    } else if ($(this).is('#nashat-bio')){
      $('#team-popup .more-info-text').text('nashat');
    } else if ($(this).is('#viktor-bio')) {
      $('#team-popup .more-info-text').text('viktor');
    } else {
      return;
    }

  });

}());
