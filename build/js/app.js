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

      let leeName = 'John Lee';
      let leeBio = "<p>John Lee is Executive Chairman of Asia for ESL, the largest esports league in the world. In addition to his duties at ESL, he is a strategic advisor to MTGx portfolio companies for the Asia markets, and has co-founded several venture backed esports and gaming companies.</p><p>Prior to his career in esports, John was with gaming companies: Gigamedia Limited and NCsoft. Earlier i his career, John worked at Softbank Venture Capital and McKinsey & Company</p>";

      let hilgersName = 'Jens Hilgers';
      let hilgersBio = "<p>Jens is a Founding Partner of BITKRAFT Esports Ventures, the world’s first dedicated esports investment fund. He is also Co-founder and Chairman of esports team G2 Esports as well as Co-Founder and CEO of the leading big data company in esports, DOJO madness.</p> <p>Widely considered one of the Godfathers of esports, Jens started his first foray into esports in 1997 and founded ESL in 2000. As CEO for ten years, Jens grew ESL into the world's most prestigious esports brand and along with it, paved the way for esports to go mainstream.</p> <p>In 2015, international entertainment company, MTG, acquired a majority stake in ESL, marking the first acquisituin of an esports company by a traditional media organization. Since 2013, Jens has actively invested in startups with a visible focus on esports.</p>";

      let galamName = 'Elie Galam';
      let galamBio = "<p>A mathemetician and financier, Elie is Chief Investments Officer of the Eastmore Group, a hedge fund with offices in the US, Canada, Europe, Hong Kong and Japan. He received a Masters in Applied Mathematics from Harvard University and a Masters in Engineering from Ecole Centrale Paris.</p> <p>Elie is an experienced crypto investor and influencer, as well as financial advisor to Bancor, a project that raised $153MM in an ICO in June 2017 - the biggest ever at the time. Furthermore, Elie is an active investor in multiple esports companies and sits on the board of O'Gaming, the largest French language stream platform on Twitch</p>";


      let langName = 'Callum Lang';
      let langBio = "<p>Callum is a partner at Unity Group Private Equity and High Commissioner for the World Business Angel Forum in Singapore. Callum is a New Zealander who has started, built, bought, and sold half a dozen businesses in a range of industries across two continents. He is a director of multiple companies and is cofounder of The Marketing Group PLC, listed in Europe. Callum sits on multiple Boards of listed and private companies and is the author of two bestselling books; 'Progressive Partnerships - The FUTURE of business' and 'Agglomerate - Idea to IPO in 12 months'. Widely published he is regularly invited to speak at conferences and on television around the world. Callum has been based in Asia for nearly 20 years with the last 6 of those in Singapore, where he resides with his young family.</p>";

      let zhouName = 'Joe Zhou';
      let zhouBio = "<p>Joe is the CEO and Co-Founder at†FirstBlood, a blockchain based esports competition platform and also one of the first companies that successfully rose funding through Ethereum blockchain.</p> <p>Prior to FirstBlood, he was the Founder and CEO at†Alt-Options, the first Bitcoin options trading platform based in the US. Additionally, Joe is also an avid investor and advisor in the blockchain space. He's a partner at NewBlock Capital - an investment fund that focuses in FinTech and Blockchain -- and a chartered anti-money laundering specialist (ACAMS).</p>";

      let maarekName = 'Pierre Maarek';
      let maarekBio = "<p>Pierre is currently the head of the Equity Derivatives activities of Exane America.</p> <p>With 15 years in the industry working for the largest players (JP Morgan†in London, Natixis in Paris and now Exane in New York), he will bring his deep knowledge of the financial industry and extensive network.</p>";

      let haoName = 'Jun Hao';
      let haoBio1 = "<p>Jun Hao, also known as “Crypto JH” in the crypto community hails from Singapore and is currently one of the world’s most prominent voices in crypto. Being an early adopter of crypto, Crypto JH has been one of the pioneers of the crypto investor space and is one of the keen analysts others seek out to guide their investment decisions.</p>";
      let haoBio = haoBio1 + "<p>Crypto JH strongly believes in giving back to the community, and has a passion for teaching people how to get started in cryptocurrency to start trading. That was the main impetus that led him to start his public Telegram and YouTube presence, teaching and informing the public about crypto.</p><p>With a wide network within the Singaporean crypto-community, Crypto JH has held engagements with prominent individuals such as the CEO of the Singapore stock exchange (SGX) and many crypto/blockchain developers. He is currently also playing advisory roles for numerous ICOs. Crypto JH has also graduated with High Distinction from a top school in Asia with a Bachelors in Finance.</p>";

      let strezynskaName = 'Anna Strezynska';
      let strezynskaBio = "<p>Anna Strezynska</p>";

      let crystalName = 'Stephen A. Crystal, ESQ';
      let crystalBio = "<p>Stephen is an attorney and investor focusing on gaming and esports.</p><p>He has spent 25 years directly involved in all aspects of the casino and gaming technology industry as well as I-Gaming and esports worldwide. As an attorney he has represented public and private gaming companies before various state regulatory bodies and jurisdictions. Stephen has also been the President and CEO of numerous casino holding and public gaming technology companies, employing thousands of employees. Lastly, Stephen is an active investor and advisor on over $2 Billion dollars of project finance and mergers and acquisitions in the casino/gaming technology/I-Gaming/esports and energy and utility spaces.</p>";

      if ($(this).find('h5').is(':contains("John Lee")')) {
        $('#advisors-popup .more-info-text').find('h3').text(leeName).siblings('.bio-text').empty('.bio-text').append(leeBio);
      } else if ($(this).find('h5').is(':contains("Jens Hilgers")')){
        $('#advisors-popup .more-info-text').find('h3').text(hilgersName).siblings('.bio-text').empty('.bio-text').append(hilgersBio);
      } else if ($(this).find('h5').is(':contains("Elie Galam")')) {
        $('#advisors-popup .more-info-text').find('h3').text(galamName).siblings('.bio-text').empty('.bio-text').append(galamBio);
      } else if ($(this).find('h5').is(':contains("Callum Lang")')) {
        $('#advisors-popup .more-info-text').find('h3').text(langName).siblings('.bio-text').empty('.bio-text').append(langBio);
      } else if ($(this).find('h5').is(':contains("Joe Zhou")')) {
        $('#advisors-popup .more-info-text').find('h3').text(zhouName).siblings('.bio-text').empty('.bio-text').append(zhouBio);
      } else if ($(this).find('h5').is(':contains("Pierre Maarek")')) {
        $('#advisors-popup .more-info-text').find('h3').text(maarekName).siblings('.bio-text').empty('.bio-text').append(maarekBio);
      } else if ($(this).find('h5').is(':contains("Jun Hao")')) {
        $('#advisors-popup .more-info-text').find('h3').text(haoName).siblings('.bio-text').empty('.bio-text').append(haoBio);
      } else if ($(this).find('h5').is(':contains("Stephen Crystal")')) {
        $('#advisors-popup .more-info-text').find('h3').text(crystalName).siblings('.bio-text').empty('.bio-text').append(crystalBio);
      }
    }
  });

}());

(function() {
  'use strict';

  function countdown() {

  			let endTime = new Date("30 March 2018 9:56:00");
  			endTime = (Date.parse(endTime) / 1000);

  			let now = new Date();
  			now = (Date.parse(now) / 1000);

  			let timeLeft = endTime - now;

  			let days = Math.floor(timeLeft / 86400);
  			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  			if (hours < "10") { hours = "0" + hours; }
  			if (minutes < "10") { minutes = "0" + minutes; }
  			if (seconds < "10") { seconds = "0" + seconds; }

  			$('#ico-days').text(days);
        $('#ico-hours').text(hours);
        $('#ico-minutes').text(minutes);
        $('#ico-seconds').text(seconds);

  	}

  	setInterval(function() { countdown(); }, 1000);

}());

(function() {
  'use strict';

  $('#notify-form').submit(function () {
    alert('Success!');
  });

  $('.currency-form', '#signup-form', '#personal-data-form', '#company-data-form', '#funding-form', '#bank-info-form').submit(function (e) {
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

  $('.social-media-wrapper a').hover(
    function () {
      $(this).find('.social-icons').addClass('social-hover').find('.social-paths').addClass('path-hover');
    }, function () {
      $(this).find('.social-icons').removeClass('social-hover').find('.social-paths').removeClass('path-hover');
    }
  );
  
}());

(function() {
  'use strict';

  $('a .burger').click(function (e) {
    e.preventDefault();
    $('header').addClass('bg-white');
    $('.full-nav').show();
    $('.nav-x').show();
    $('.burger').hide();
    $('#islands').addClass('blur');
  });

  $('a .nav-x').click(function (e) {
    e.preventDefault();
    $('header').removeClass('bg-white');
    $('.full-nav').hide();
    $('.burger').show();
    $('.nav-x').hide();
    $('#islands').removeClass('blur');
  });

  let hidePops = function hidePops() {
    $('.popup').addClass('hide');
    $('header').removeClass('bg-white');
    $('.full-nav').hide();
    $('.burger').show();
    $('.nav-x').hide();
  };

  $('.full-nav li').click(function () {
    hidePops();
    if ($(this).is(':contains("whitepaper")')) {
      $('#whitepaper-popup').removeClass('hide');
    } else if ($(this).is(':contains("roadmap")')) {
      $('#roadmap2-popup').removeClass('hide');
    } else if ($(this).is(':contains("pre-ico")')) {
      $('#signup-popup').removeClass('hide');
    } else if ($(this).is(':contains("tokens")')) {
      $('#tokens-popup').removeClass('hide');
    } else if ($(this).is(':contains("distribution")')) {
      $('#distribution-popup').removeClass('hide');
    } else if ($(this).is(':contains("why")')) {
      $('#why-now-popup').removeClass('hide');
    } else if ($(this).is(':contains("market")')) {
      $('#market-popup').removeClass('hide');
    } else if ($(this).is(':contains("projections")')) {
      $('#projections-popup').removeClass('hide');
    } else if ($(this).is(':contains("team")')) {
      $('#team-popup').removeClass('hide');
    } else if ($(this).is(':contains("story")')) {
      $('#ourstory-popup').removeClass('hide');
    } else if ($(this).is(':contains("company")')) {
      $('#company-popup').removeClass('hide');
    } else if ($(this).is(':contains("advisors")')) {
      $('#advisors-popup').removeClass('hide');
    } else if ($(this).is(':contains("contact")')) {
      $('#contactus-popup').removeClass('hide');
    } else {
      return;
    }
  });

}());

(function() {
  'use strict';

  let sum2013 = 'Kinguin.net comes online, the first marketplace for gamers with extra CD-keys.';
  let end2013 = '2 Million Monthly visitors, $3.5 million in turnover.';

  let sum2014 = 'International Expansion.';
  let end2014 = '$22 Million in turnover.';

  let sum2015 = 'Team Kinguin is formed.';
  let end2015 = 'International sales represent 90% of gross.';

  let sum2016 = 'Kinguin global support team grows to 100 people.';
  let end2016 = '4 Million Customers and 4,000 active merchants.';

  let sum2017 = 'Team Kinguin Performance Center in Warsaw is initiated. Expected launch in 2018.';
  let end2017 = 'Combined community savings of $150 million on Kinguin.net';

  $('.dates-row li').click(function () {
    if ($(this).is(':contains("2013")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2013);
      $('.end-year-sum').text(end2013);
    } else if ($(this).is(':contains("2014")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2014);
      $('.end-year-sum').text(end2014);
    } else if ($(this).is(':contains("2015")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2015);
      $('.end-year-sum').text(end2015);
    } else if ($(this).is(':contains("2016")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2016);
      $('.end-year-sum').text(end2016);
    } else if ($(this).is(':contains("2017")')) {
      $(this).addClass('date-active').removeClass('date-inactive');
      $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
      $('.year-summary').text(sum2017);
      $('.end-year-sum').text(end2017);
    }
  });

}());

(function() {
  'use strict';

// *** About Island ***

  $('#bulb').click(function() {
    $('#advisors-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#team').click(function() {
    $('#team-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#company').click(function() {
    $('#company-popup').toggleClass('hide');
   $('#islands-wrapper').addClass('blur');
  });

  $('#ourstory').click(function() {
    $('#ourstory-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#contactus').click(function() {
    $('#contactus-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Landing Island ***

  $('#notify-btn').click(function() {
    $('#notify-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('.info-panel').click(function () {
    $(this).toggleClass('info-clicked');
    $(this).toggleClass('info-panel');
  });

// *** Info Island ***

  $('#tokens').click(function() {
    $('#tokens-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#market').click(function() {
    $('#market-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#whitepaper').click(function () {
    $('#whitepaper-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Strategy Island ***
  $('#problem-solution').click(function () {
    $('#problem-solution-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#distribution').click(function () {
    $('#distribution-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#projections').click(function () {
    $('#projections-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

  $('#roadmap').click(function () {
    $('#roadmap2-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });
  $('#roadmap2-popup').click(function () {
    $(this).addClass('hide');
    $('#islands-wrapper').removeClass('blur');
  });

  $('#why-now').click(function() {
    $('#why-now-popup').toggleClass('hide');
    $('#islands-wrapper').addClass('blur');
  });

// *** Basic ***
  $('.close-popup').click(function() {
    $(this).closest('.popup-outer-wrapper').toggleClass('hide');
    $('#islands-wrapper').removeClass('blur');
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

    let viktorName = 'Viktor Wanli';
    let viktorSubtext = 'Entrepreneur and visionary for gaming and esports ecosystem since 2007.';
    let viktorBio = '<p>Founder of Kinguin.net, a leading gaming marketplace platform with 7.5 million users and $100MM annual turnover.</p> <p>CEO of Team Kinguin SA, the number one eSport organization in Poland.</p> <p>CEO of Kinguin Franchising Systems, a company created with the purpose of establishing esports hubs around the world.</p>';

    let nashatName = 'Nashat Wanli';
    let nashatSubtext = 'Entrepreneurial-spirited and pioneering technologist with over 18 years of international experience implementing technologies.';
    let nashatBio = '<p>Previous companies include VMware and Sciant. Over 8 years of experience in virtualization.</p>';

    let kimName = 'Kim Rom';
    let kimSubtext = 'Over 20 years of experience in gaming and esports.';
    let kimBio = '<p>Former Chief Marketing Officer at Steelseries, and VP of Esports at CBS Interactive.</p> <p>Co-author of several patents related to gaming and player performance.</p>';

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

(function() {
  'use strict';


  let kinguinReady = "Kinguin was founded on the belief that gamers should be able to freely trade their digital property. This belief is shared by a global community of seven million gamers: by the end of 2017 Kinguin customers will have saved more than $210 million dollars on digital games and in-game items. Now it’s time to evolve the platform to the next generation.";

  let interfaceReady = "Simply put: trade doesn’t have to be boring, tedious or complex. We began work on chat bots more than a year ago and have since served thousands of customers through conversational technology - recording a groundbreaking 96% customer support satisfaction rate. It’s time to revolutionize trade.";

  let tradeReady = "A user-friendly system allows anyone to setup a trade channel and start earning money on digital products or services. Our trade bots will extend deep into the community, facilitating trade on social media platforms, where it will feel as a natural part of any gamer’s lifestyle.";

  let technologyReady = "Technology has now reached the point where global trade between gamers can be easy, secure and nearly instant thanks to blockchain and smart contracts. In just five years, the annual secondary market for digital games has gone from zero to one billion dollars. As new technologies gradually eliminate mistrust from the value chain, we believe the global market for player-to-player trade will dramatically increase.";

  let marketReady = "Online gamers naturally embrace every aspect of digital value creation, micro-transactions and monetization of virtual goods in their games. Our new marketplace will open entirely new revenue streams for the best players, value creators, and influencers - allowing them to monetize a much bigger part of the value creation they facilitate in gaming.";

  let communityReady = "As gaming transitions to a community experience, so should the marketplace of the future. As Kinguin transitions to the blockchain and smart contracts, we’re launching a new micro-service-industry for the global gaming community.";

  // TODO: pull out class toggles into separate function.
  //       previous attempts failed despite being identical
  //       to similar function in story popup.

  $('.why-btn:contains("interface")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(interfaceReady);
  });

  $('.why-btn:contains("trade")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(tradeReady);
  });

  $('.why-btn:contains("technology")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(technologyReady);
  });

  $('.why-btn:contains("market")').click(function () {
    $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
    $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
    $(this).removeClass('why-btn').addClass('why-active');

    $('.why-info-text').find('p').text(marketReady);
    });

    $('.last-btn:contains("community")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');

      $(this).removeClass('last-btn').addClass('last-active');

      $('.why-info-text').find('p').text(communityReady);
    });

    $('.why-btn:contains("kinguin")').click(function () {
      $(this).siblings('.why-active').removeClass('why-active').addClass('why-btn');
      $(this).siblings('.last-active').removeClass('last-active').addClass('last-btn');
      $(this).removeClass('why-btn').addClass('why-active');

      $('.why-info-text').find('p').text(kinguinReady);
    });

}());
