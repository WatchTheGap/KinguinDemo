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

  let activeDate = function activeDate() {
    $(this).addClass('date-active').removeClass('date-inactive');
    $(this).siblings('.date-active').addClass('date-inactive').removeClass('date-active');
  };

  $('.dates-row li').click(function () {
    if ($(this).is(':contains("2013")')) {
      activeDate();
      $('.year-summary').text(sum2013).siblings('.end-year-sum').text(end2013);
    } else if ($(this).is(':contains("2014")')) {
      activeDate();
      $('.year-summary').text(sum2014).siblings('.end-year-sum').text(end2014);
    } else if ($(this).is(':contains("2015")')) {
      activeDate();
      $('.year-summary').text(sum2015).siblings('.end-year-sum').text(end2015);
    } else if ($(this).is(':contains("2016")')) {
      activeDate();
      $('.year-summary').text(sum2016).siblings('.end-year-sum').text(end2016);
    } else if ($(this).is(':contains("2017")')) {
      activeDate();
      $('.year-summary').text(sum2017).siblings('.end-year-sum').text(end2017);
    }
  });

}());
