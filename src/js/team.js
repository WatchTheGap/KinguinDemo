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

    let viktorName = 'Viktor Wanli';
    let viktorSubtext = 'Entrepreneur and visionary for gaming and esports since 2007.';
    let viktorBio = '<p>Founder of Kinguin.net, a leading gaming marketplace platform with 7.5 million users and $100MM annual turnover.</p> <p>CEO of Team Kinguin SA, the No. 1 eSport organization in Poland.</p> <p>CEO of Kinguin Franchising Systems, a company created for the purpose of establishing esports hubs around the world.</p>';

    let nashatName = 'Nashat Wanli';
    let nashatSubtext = 'Entrepreneurial-spirited and pioneering technologist more than 18 years of international experience implementing technologies.';
    let nashatBio = '<p>Previous companies include VMware and Sciant. More than 8 years of experience in virtualization.</p>';

    let kimName = 'Kim Rom';
    let kimSubtext = 'More than 20 years of experience in gaming and esports.';
    let kimBio = '<p>Former Chief Marketing Officer at Steelseries and VP of Esports at CBS Interactive.</p> <p>Co-author of several patents related to gaming and player performance.</p>';

    if ($(this).is('#viktor-bio')) {
      $('#team-popup .more-info-text').find('h3').text(viktorName).siblings('h4').text(viktorSubtext).siblings('.bio-text').empty('.bio-text').append(viktorBio);
    } else if ($(this).is('#nashat-bio')){
      $('#team-popup .more-info-text').find('h3').text(nashatName).siblings('h4').text(nashatSubtext).siblings('.bio-text').empty('.bio-text').append(nashatBio);
    } else if ($(this).is('#kim-bio')) {
      $('#team-popup .more-info-text').find('h3').text(kimName).siblings('h4').text(kimSubtext).siblings('.bio-text').empty('.bio-text').append(kimBio);
    } else {
      return;
    }

  });

}());
