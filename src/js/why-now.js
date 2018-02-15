(function() {
  'use strict';

  $('.why-btn:contains("interface")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text('interface text is here!!!');
  });


}());
