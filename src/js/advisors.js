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
      let leeBio = "<p>John Lee is Executive Chairman of Asia for ESL, the largest esports league in the world. In addition to his duties at ESL, he is a strategic advisor to MTGx portfolio companies for the Asia markets and has co-founded several venture backed esports and gaming companies.</p><p>Prior to his career in esports, John was with gaming companies: Gigamedia Limited and NCsoft. Earlier in his career, John worked at Softbank Venture Capital and McKinsey & Company.</p>";

      let hilgersName = 'Jens Hilgers';
      let hilgersBio = "<p>Jens is a Founding Partner of BITKRAFT Esports Ventures, the world’s first dedicated esports investment fund. He is also Co-founder and Chairman of esports team G2 Esports as well as Co-Founder and CEO of the leading big data company in esports, DOJO madness.</p> <p>Widely considered one of the Godfathers of esports, Jens started his first foray into the industry in 1997 and founded ESL in 2000. As CEO for ten years, Jens grew ESL into the world's most prestigious esports brand, and along with it, paved the way for esports to go mainstream.</p> <p>In 2015, international entertainment company MTG acquired a majority stake in ESL, marking the first acquisituin of an esports company by a traditional media organization. Since 2013, Jens has actively invested in startups with a visible focus on esports.</p>";

      let galamName = 'Elie Galam';
      let galamBio = "<p>A mathemetician and financier, Elie is Chief Investments Officer of the Eastmore Group, a hedge fund with offices in the US, Canada, Europe, Hong Kong, and Japan. He received a Masters in Applied Mathematics from Harvard University and a Masters in Engineering from Ecole Centrale Paris.</p> <p>Elie is an experienced crypto investor and influencer as well as financial advisor to Bancor, a project that raised $153MM in an ICO in June 2017 - the biggest ever at the time. Furthermore, Elie is an active investor in multiple esports companies and sits on the board of O'Gaming, the largest French language stream platform on Twitch.</p>";


      let liangName = 'Callum Liang';
      let liangBio = "<p>Callum is a partner at Unity Group Private Equity and High Commissioner for the World Business Angel Forum in Singapore. He is a New Zealander who has started, built, bought, and sold half a dozen businesses in a range of industries across two continents. He also directs multiple companies and is cofounder of The Marketing Group PLC, listed in Europe.</p><p>Callum sits on multiple Boards of listed and private companies and is the author of two bestselling books; 'Progressive Partnerships - The FUTURE of business' and 'Agglomerate - Idea to IPO in 12 months'. Widely published, he is regularly invited to speak at conferences and on television around the world. Callum has been based in Asia for nearly 20 years with the last 6 of those in Singapore, where he resides with his young family.</p>";

      let zhouName = 'Joe Zhou';
      let zhouBio = "<p>Joe is the CEO and Co-Founder at FirstBlood, a blockchain-based esports competition platform and also one of the first companies that successfully rose funding through Ethereum blockchain.</p> <p>Prior to FirstBlood, he was the Founder and CEO at Alt-Options, the first Bitcoin options trading platform based in the US. Additionally, Joe is also an avid investor and advisor in the blockchain space. He's a partner at NewBlock Capital - an investment fund that focuses in FinTech and Blockchain - and a chartered anti-money laundering specialist (ACAMS).</p>";

      let maarekName = 'Pierre Maarek';
      let maarekBio = "<p>Pierre is currently the head of the Equity Derivatives activities of Exane America.</p> <p>With 15 years in the industry working for the largest players (JP Morgan in London, Natixis in Paris, and now Exane in New York), he will bring his deep knowledge of the financial industry and extensive network to the Kinguin.io venture.</p>";

      let haoName = 'Jun Hao';
      let haoBio1 = "<p>Jun Hao, also known as “Crypto JH” in the crypto community, hails from Singapore and currently is one of the world’s most prominent voices in crypto. Being an early adopter of crypto, Crypto JH has pioneered the crypto investor space and is one of the keen analysts others seek out to guide their investment decisions.</p>";
      let haoBio = haoBio1 + "<p>Crypto JH strongly believes in giving back to the community, and has a passion for teaching people how to get started trading cryptocurrency. That was the main impetus that led him to start his public Telegram and YouTube presence, where he teaches and informs the public about crypto.</p><p>With a wide network within the Singaporean crypto-community, Crypto JH has held engagements with prominent individuals such as the CEO of the Singapore stock exchange (SGX) and many crypto/blockchain developers. He advises numerous ICOs. Crypto JH also graduated with High Distinction from a top school in Asia with a Bachelors in Finance.</p>";

      let strezynskaName = 'Anna Strezynska';
      let strezynskaBio = "<p>Anna is the former Minister of Digital Affairs in Poland (2015-2018), with the highest approval rating of any Polish politician at 80%. Much of Anna's career has been spent in public service in Poland, where she worked on telecom and competition policy.</p><p>Today, Anna is the President of the Management Board for MC2. MC2 is a new technology company focused on implementation, training, and consultation of blockchain and smart technologies around the world.</p>";

      let crystalName = 'Stephen A. Crystal, ESQ';
      let crystalBio = "<p>Stephen is an attorney and investor focusing on gaming and esports.</p><p>He has spent 25 years directly involved in all aspects of the casino and gaming technology industries as well as I-Gaming and esports worldwide. As an attorney, he has represented public and private gaming companies before various state regulatory bodies and jurisdictions. Stephen also has been the President and CEO of numerous casino holding and public gaming technology companies, employing thousands. Lastly, Stephen is an active investor and advisor on over $2 Billion dollars of project finance and mergers and acquisitions in the casino/gaming technology/I-Gaming/esports and energy and utility spaces.</p>";

      let shulginName = 'Alexander Shulgin';
      let shulginBio = '<p>Alexander is a one-of-a-kind Russian-Siberian musician. He has composed 50+ #1 chart-toppers and successfully combines creative thinking with business. He manages GRUPPA KOMPANIY FAMILIA, which specializes in blockchain, new media, publishing, and entertainment investments. Recognized as one of the world’s leading visionaries in the digital disruption of the world economy, as well as blockchain technology, the creative economy, media, entertainment, and sports. Considered an expert in the crypto world, he has invested in many leading companies such as Bitfury and DotBlockchainMedia. Alexander is a member of the Expert Council under the Prime Minister of the Russian Federation, where he has been awarded the Order of the Medal for “Professionalism and Business Reputation.” He furthermore serves as advisor to high-profile crypto companies and regulators.</p>';

      if ($(this).find('h5').is(':contains("John Lee")')) {
        $('#advisors-popup .more-info-text').find('h3').text(leeName).siblings('.bio-text').empty('.bio-text').append(leeBio);
      } else if ($(this).find('h5').is(':contains("Jens Hilgers")')){
        $('#advisors-popup .more-info-text').find('h3').text(hilgersName).siblings('.bio-text').empty('.bio-text').append(hilgersBio);
      } else if ($(this).find('h5').is(':contains("Elie Galam")')) {
        $('#advisors-popup .more-info-text').find('h3').text(galamName).siblings('.bio-text').empty('.bio-text').append(galamBio);
      } else if ($(this).find('h5').is(':contains("Callum Liang")')) {
        $('#advisors-popup .more-info-text').find('h3').text(liangName).siblings('.bio-text').empty('.bio-text').append(liangBio);
      } else if ($(this).find('h5').is(':contains("Joe Zhou")')) {
        $('#advisors-popup .more-info-text').find('h3').text(zhouName).siblings('.bio-text').empty('.bio-text').append(zhouBio);
      } else if ($(this).find('h5').is(':contains("Pierre Maarek")')) {
        $('#advisors-popup .more-info-text').find('h3').text(maarekName).siblings('.bio-text').empty('.bio-text').append(maarekBio);
      } else if ($(this).find('h5').is(':contains("Anna Strezynska")')) {
        $('#advisors-popup .more-info-text').find('h3').text(strezynskaName).siblings('.bio-text').empty('.bio-text').append(strezynskaBio);
      }  else if ($(this).find('h5').is(':contains("Jun Hao")')) {
        $('#advisors-popup .more-info-text').find('h3').text(haoName).siblings('.bio-text').empty('.bio-text').append(haoBio);
      } else if ($(this).find('h5').is(':contains("Stephen Crystal")')) {
        $('#advisors-popup .more-info-text').find('h3').text(crystalName).siblings('.bio-text').empty('.bio-text').append(crystalBio);
      } else if ($(this).find('h5').is(':contains("Alexander Shulgin")')) {
        $('#advisors-popup .more-info-text').find('h3').text(shulginName).siblings('.bio-text').empty('.bio-text').append(shulginBio);
      }
    }
  });

}());
