(function() {
  'use strict';

  $.preload(
    '/img/Advisors.png',
    '/img/BTC1.png',
    '/img/BTC2.png',
    '/img/Bulb_hover.png',
    '/img/Bulb.png',
    '/img/CallumLang.png',
    '/img/Close.png',
    '/img/cloud.png',
    '/img/Company_hover.png',
    '/img/Company.png',
    '/img/ContactUs_hover.png',
    '/img/ContactUs.png',
    '/img/Distribution_hover.png',
    '/img/Distribution.png',
    '/img/Distro.png',
    '/img/ElieGalam.png',
    '/img/ETH1.png',
    '/img/ETH2.png',
    '/img/EUR1.png',
    '/img/EUR2.png',
    '/img/GoBtn_Default.png',
    '/img/GoBtn_Hover.png',
    '/img/Info_block.png',
    '/img/Info_hover.png',
    '/img/Info_Stairs.png',
    '/img/Info_Strategy_Stairs.png',
    '/img/Info.png',
    '/img/JensHilgers.png',
    '/img/JoeZhou.png',
    '/img/JohnLee.png',
    '/img/Kim.png',
    '/img/Landing_About_Stairs.png',
    '/img/Landing.png',
    '/img/Market_default.png',
    '/img/Market_hover.png',
    '/img/Market.png',
    '/img/Middle_Stairs.png',
    '/img/Nashat.png',
    '/img/No1Cust.png',
    '/img/Notify_Stairs.png',
    '/img/NotifyBtn_Default.png',
    '/img/NotifyBtn_Hover.png',
    '/img/OurStory_hover.png',
    '/img/OurStory.png',
    '/img/PierreMaarek.png',
    '/img/Problem_hover.png',
    '/img/Problem.png',
    '/img/Progress_Bar_1.png',
    '/img/Progress_Bar_2.png',
    '/img/Progress_Bar_3.png',
    '/img/Progress_Bar_4.png',
    '/img/progress_circle.png',
    '/img/progress_kinguin.png',
    '/img/progress_line.png',
    '/img/Projections_Graph.png',
    '/img/Projections_hover.png',
    '/img/Projections.png',
    '/img/Roadmap_block.png',
    '/img/roadmap-arrow.png',
    '/img/roadmap-next-line.png',
    '/img/Roadmap.png',
    '/img/StephenCrystal.png',
    '/img/Strategy_A.png',
    '/img/Strategy_B.png',
    '/img/Strategy_block.png',
    '/img/Strategy_Connector.png',
    '/img/Team_hover.png',
    '/img/Team.png',
    '/img/Token_Distro.png',
    '/img/Token_ground.png',
    '/img/Tokens.png',
    '/img/trees.png',
    '/img/upload_arrow.png',
    '/img/USD1.png',
    '/img/USD2.png',
    '/img/Use_Of_Funds.png',
    '/img/Viktor.png',
    '/img/waddle.png',
    '/img/Whitepaper_hover.png',
    '/img/Whitepaper.png',
    '/img/WhyNow_hover.png',
    '/img/WhyNow.png'
  );

}());

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

(function() {
  'use strict';

  $('form').submit(function (e) {
    e.preventDefault();
  }); 

    let currencyType;
    let donationAmt;
    let name;
    let userEmail;

    $('#BTC-select').click(function () {
      currencyType = 'BTC';
      localStorage.setItem('currency', currencyType);
      $('.left-select').addClass('selected')
        .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('BTC');
    });

    $('#ETH-select').click(function () {
      currencyType = 'ETH';
      localStorage.setItem('currency', currencyType);
      $('.right-select').addClass('selected')
      .siblings('.left-select').removeClass('selected');
      $('.currency-placeholder').text('ETH');

    });

    $('#USD-select').focus(function () {
      currencyType = 'USD';
      localStorage.setItem('currency', currencyType);
      $('.left-select').addClass('selected')
      .siblings('.right-select').removeClass('selected');
      $('.currency-placeholder').text('USD');

    });

    $('#EUR-select').focus(function () {
      currencyType = 'EUR';
      localStorage.setItem('currency', currencyType);
      $('.right-select').addClass('selected')
        .siblings('.left-select').removeClass('selected');
        $('.currency-placeholder').text('EUR');

    });



    //
    // $('#choose-fiat-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#fiat-continue').click();
    //     console.log(localStorage);
    //   }
    // });
    //
    //
    //
    // $('#aml-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#aml-continue').click();
    //     console.log(localStorage);
    //   }
    // });
    //
    //
    // $('#kyc-popup input').keypress(function (e) {
    //   if (e.which == 13) {
    //     $('#kyc-continue').click();
    //     console.log(localStorage);
    //   }
    // });

}());

(function() {
  'use strict';

  $('.dates-row li:contains("2013")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>Wowie wow wow</p>');
    // TODO: this is probably not the best way to do this...
  });


  $('.dates-row li:contains("2014")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>2014</p>');
  });

  $('.dates-row li:contains("2015")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>2015</p>');
  });

  $('.dates-row li:contains("2016")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>2016</p>');
  });

  $('.dates-row li:contains("2017")').click(function () {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
    $('#story-info-text').html('<p>2017</p>');
  });

}());

(function() {
  'use strict';

// *** About Island ***

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#team').click(function() {
    $('#team-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#company').click(function() {
    $('#company-popup').toggleClass('hide');
   $('#islands').addClass('blur');
  });

  $('#ourstory').click(function() {
    $('#ourstory-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#contactus').click(function() {
    $('#contactus-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    $('#notify-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('.info-panel').click(function () {
    $(this).toggleClass('info-clicked');
    $(this).toggleClass('info-panel');
  });

// *** Info Island ***

  $('#tokens').click(function() {
    $('#tokens-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#market').click(function() {
    $('#market-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#whitepaper').click(function () {
    $('#whitepaper-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

// *** Strategy Island ***
  $('#problem-solution').click(function () {
    $('#problem-solution-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#distribution').click(function () {
    $('#distribution-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#projections').click(function () {
    $('#projections-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#roadmap').click(function () {
    $('#roadmap-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#why-now').click(function() {
    $('#why-now-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

// *** Basic ***
  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
    $('#islands').removeClass('blur');
  });

}());

(function() {
  'use strict';

  $('.node-wrapper:contains("PROJECT")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('PROJECT START')
      .siblings('p').text('new project text in here!');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ANNOUNCEMENT")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ANNOUNCEMENT')
      .siblings('p').text('ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT ANNOUNCEMENT');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("PRE-ICO")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('PRE-ICO')
      .siblings('p').text('PRE-ICO PRE-ICO PRE-ICO PRE-ICO PRE-ICO');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ICO OPENS")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ICO OPENS')
      .siblings('p').text('ICO OPENS ICO OPENS ICO OPENS ICO OPENS ICO OPENS');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("ICO CLOSES")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('ICO CLOSES')
      .siblings('p').text('ICO CLOSES ICO CLOSES ICO CLOSES ICO CLOSES ICO CLOSES');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("MARKETPLACE TRANSITIONS")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('MARKETPLACE TRANSITIONS')
      .siblings('p').text('MARKETPLACE TRANSITIONS MARKETPLACE TRANSITIONS MARKETPLACE TRANSITIONS');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("COMMUNITY SHARE")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('COMMUNITY SHARE')
      .siblings('p').text('COMMUNITY SHARE COMMUNITY SHARE COMMUNITY SHARE');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

  $('.node-wrapper:contains("TRANSITION END")').click(function () {
    $('#roadmap-popup .modal-footer').find('h2').text('TRANSITION END')
      .siblings('p').text('TRANSITION END TRANSITION END TRANSITION END');
    $('.node-row').find('.node-active').addClass('node-inactive').removeClass('node-active');
    $(this).find('.roadmap-node').addClass('node-active').removeClass('node-inactive');
  });

}());

(function() {
  'use strict';

  $('#go-btn').click(function () {
    $('#signup-popup').toggleClass('hide');
    $('#islands').addClass('blur');
  });

  $('#signup-button-crypto').click(function () {
    $('#signup-popup').toggleClass('hide');
    $('#choose-crypto-popup').toggleClass('hide');
  });

  $('#signup-button-fiat').click(function () {
    $('#signup-popup').toggleClass('hide');
    $('#choose-fiat-popup').toggleClass('hide');
  });

  $('#crypto-continue').click(function () {
    $('input[name=crypto-amt]').val(function () {
      localStorage.setItem('donationAmt', this.value);
    });
    $('#choose-crypto-popup').toggleClass('hide');
    $('#aml-popup').toggleClass('hide');
    console.log(localStorage);
  });

  $('#fiat-continue').click(function () {
    $('input[name=donation-amt]').val(function () {
      localStorage.setItem('donationAmt', this.value);
    });
    $('#choose-fiat-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#kyc-continue').click(function () {
    $('input[name=name-kyc]').val(function () {
      localStorage.setItem('name', this.value);
    });
    $('input[name=user-email-kyc]').val(function () {
      localStorage.setItem('userEmail', this.value);
    });
    $('#investor-popup').toggleClass('hide');
    $('#kyc-popup').toggleClass('hide');
  });

  $('#investor-button-private').click(function () {
    $('#investor-private-popup').toggleClass('hide');
    $('#investor-popup').toggleClass('hide');
  });

  $('#investor-button-company').click(function () {
    $('#investor-company-popup').toggleClass('hide');
    $('#investor-popup').toggleClass('hide');
  });

  $('#investor-private-continue').click(function () {
    $('#investor-private-popup').toggleClass('hide');
    $('#islands').removeClass('blur');
  });

  $('#investor-company-continue').click(function () {
    $('#investor-company-popup').toggleClass('hide');
    $('#islands').removeClass('blur');
  });

  $('#aml-continue').click(function (e) {
    e.preventDefault();
    $('input[name=name]').val(function () {
      localStorage.setItem('name', this.value);
    });
    $('input[name=user-email]').val(function () {
      localStorage.setItem('userEmail', this.value);
    });
    $('#aml-eth-popup').toggleClass('hide');
    $('#aml-popup').toggleClass('hide');
  });

}());

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

(function() {
  'use strict';

  $('.why-btn:contains("interface")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text('interface text is here!!!');
  });

  $('.why-btn:contains("trade")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text('trade text is here!!!');
  });

  $('.why-btn:contains("technology")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text('technology text is here!!!');
  });

  $('.why-btn:contains("market")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text('market text is here!!!');
    });

    $('.last-btn:contains("community")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');

      $(this).removeClass('last-btn').addClass('last-active');

      $('.why-info-text').find('p').text('community text is here!!!');
    });

    $('.why-btn:contains("kinguin")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
      $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
      $(this).removeClass('why-btn').addClass('why-active');

      $('.why-info-text').find('p').text('Technology has now reached the point where global trade between gamers can be easy, secure and nearly instant - thanks to blockchain and smart contracts. In just five years, the annual secondary market for digital games has gone from zero to one billion dollars. As new technologies gradually eliminate mistrust from the value chain, we believe the global market for player-to-player trade will dramatically increase.');
    });

}());
