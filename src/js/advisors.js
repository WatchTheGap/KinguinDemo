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
      } else if ($(this).find('h5').is(':contains("Stephen Crystal")')) {
        $('#advisors-popup .more-info-text').find('h3').text(crystalName).siblings('.bio-text').empty('.bio-text').append(crystalBio);
      }
    }
  });

}());
