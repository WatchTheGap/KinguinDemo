(function() {
  'use strict';


  let kinguinReady = "Kinguin was founded on the belief that gamers should be able to freely trade their digital property. This belief is shared by a global community of seven million gamers: by the end of 2017 Kinguin customers will have saved more than $210 million dollars on digital games and in-game items. Now it’s time to evolve the platform to the next generation.";

  let interfaceReady = "Simply put: trade doesn’t have to be boring, tedious, or complex. We began work on chatbots more than a year ago and since have served thousands of customers through conversational technology, recording a groundbreaking 96% customer support satisfaction rate. It’s time to revolutionize trade.";

  let tradeReady = "A user-friendly system allows anyone to setup a trade channel and start earning money on digital products or services. Our trade bots will extend deep into the community, facilitating trade on social media platforms, where it will feel like a natural part of any gamer’s lifestyle.";

  let technologyReady = "Technology now has reached the point where global trade between gamers can be easy, secure, and nearly instant thanks to blockchain and smart contracts. In just five years, the annual secondary market for digital games has gone from zero to one billion dollars. As new technologies gradually eliminate mistrust from the value chain, we believe the global market for player-to-player trade will increase dramatically.";

  let marketReady = "Online gamers naturally embrace every aspect of digital value creation, micro-transactions, and monetization of virtual goods in their games. Our new marketplace will open entirely new revenue streams for the best players, value creators, and influencers, allowing them to monetize a much bigger part of the value creation they facilitate in gaming.";

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
