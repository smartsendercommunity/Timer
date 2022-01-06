//head

<style type="text/css">
.endtimer {
	color:red !important;
	font-size:20px !important;
}
.timer {
	color:green !important;
	font-size:25px !important;
}
</style>
<script>
var deadline="Jan 07 2022 05:11:55+0200";
var endTimeText = "ВРЕМЯ ИСТЕКЛО!!!";
var createTarget = "wYyOT3ZL5";
var getTarget = window.location.href.split('?')[0].split('/lp/')[1];
</script>


//body

<script>

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function declensionNum(num, words) {
	return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}

function initializeClock(id, endtime) {
	if (createTarget != getTarget) {
		return true;
	}
	var content = document.getElementsByClassName('widget-text-container')[0];
	let clock = document.createElement('p');
	clock.id = id;
	clock.className = "widget-description timer";
	clock.style = "text-align:center";
	content.append(clock);

	function updateClock() {
		var t = getTimeRemaining(endtime);
		if (t.total <= 0) {
			clock.innerHTML = endTimeText;
			clock.className = "widget-description endtimer";
			document.getElementsByClassName("widget-channels")[0].className = "hidden";
			clearInterval(timeinterval);
			return true;
		}
		if (t.days <= 0) {
			clock.innerHTML = ('0' + t.hours).slice(-2)+":"+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2);
		} else {
			clock.innerHTML = t.days+" "+declensionNum(t.days, ['день', 'дня', 'дней'])+" "+('0' + t.hours).slice(-2)+":"+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('timer', deadline);
</script>
