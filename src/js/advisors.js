(function() {
  'use strict';

  $('.advisor').click(function () {
    if ($(this).find('.avatar').hasClass('avatar-selected')) {
      $('.more-info-text').hide();
      $(this).find('.avatar').removeClass('avatar-selected');
    } else {
      $(this).find('.avatar').addClass('avatar-selected');
      $(this).siblings('.advisor').find('.avatar').removeClass('avatar-selected');
      $('.more-info-text').show();

      if ($(this).find('h5').is(':contains("John Lee")')) {
        $('#advisors-popup .more-info-text').find('h3').text('John Lee').siblings('p').text('john lee text text text');
      } else if ($(this).find('h5').is(':contains("Jens Hilgers")')){
        $('#advisors-popup .more-info-text').find('h3').text('Jens Hilgers').siblings('p').text('jens hilgers text text text');
      } else if ($(this).find('h5').is(':contains("Elie Galam")')) {
        $('#advisors-popup .more-info-text').find('h3').text('Elie Galam').siblings('p').text('elie galam text');
      } else if ($(this).find('h5').is(':contains("Callum Lang")')) {
        $('#advisors-popup .more-info-text').find('h3').text('Callum Lang').siblings('p').text('callum lang text');
      } else if ($(this).find('h5').is(':contains("Joe Zhou")')) {
        $('#advisors-popup .more-info-text').find('h3').text('Joe Zhou').siblings('p').text('joe zhou text');
      } else if ($(this).find('h5').is(':contains("Pierre Maarek")')) {
        $('#advisors-popup .more-info-text').find('h3').text('Pierre Maarek').siblings('p').text('pierre maarek text');
      } else if ($(this).find('h5').is(':contains("Stephen Crystal")')) {
        $('#advisors-popup .more-info-text').find('h3').text('Stephen Crystal').siblings('p').text('stephen crystal text');
      }
    }
  });

}());
