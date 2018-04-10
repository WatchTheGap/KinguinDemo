(function() {
  'use strict';

  function countdown() {

  			let endTime = new Date("2 June 2018 00:00:00");
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
