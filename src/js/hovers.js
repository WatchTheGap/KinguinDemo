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

  // $('.figures').hover(
  //   function () {
  //     $(this).addClass('figures-hover');
  //     $('.team').addClass('team-hover');
  //     $('.team-title').addClass('team-title-hover');
  //     $('.shadows').addClass('shadows-hover');
  //   },
  //   function () {
  //     $(this).removeClass('figures-hover');
  //     $('.team').removeClass('team-hover');
  //     $('.team-title').removeClass('team-title-hover');
  //     $('.shadows').removeClass('shadows-hover');
  //   }
  // );

  $('.company-title').hover(
    function () {
      $(this).addClass('company-title-hover');
      $('.company').addClass('company-hover');
      $('.company-penguin').addClass('company-penguin-hover');
    },
    function () {
      $(this).removeClass('company-title-hover');
      $('.company').removeClass('company-hover');
      $('.company-penguin').removeClass('company-penguin-hover');
    }
  );

  $('.company-penguin').hover(
    function () {
      $(this).addClass('company-penguin-hover');
      $('.company').addClass('company-hover');
      $('.company-title').addClass('company-title-hover');
    },
    function () {
      $(this).removeClass('company-penguin-hover');
      $('.company').removeClass('company-hover');
      $('.company-title').removeClass('company-title-hover');
    }
  );

  $('.ourstory').hover(
    function () {
      $(this).addClass('ourstory-hover');
      $('.story-title').addClass('story-title-hover');
    },
    function () {
      $(this).removeClass('ourstory-hover');
      $('.story-title').removeClass('story-title-hover');
    }
  );

  $('.bulb').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );
  $('.advisors-title').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );
  $('.advisor-block').hover(
    function () {
      $('.advisor-block').addClass('advisor-block-hover');
      $('.bulb').addClass('bulb-hover');
    },
    function () {
      $('.advisor-block').removeClass('advisor-block-hover');
      $('.bulb').removeClass('bulb-hover');
    }
  );

  $('.letter').hover(
    function () {
      $(this).addClass('letter-hover');
      $('.contactus').addClass('contactus-hover');
      $('.contact-title').addClass('contact-title-hover');
    },
    function () {
      $(this).removeClass('letter-hover');
      $('.contactus').removeClass('contactus-hover');
      $('.contact-title').removeClass('contact-title-hover');
    }
  );

}());
