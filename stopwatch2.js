//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//




var	clsStopwatch2 = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start2 = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop2 = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset2 = function() {
				lapTime = startAt = 0;
			};

		// Duration
		this.time2 = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x2 = new clsStopwatch2();
var $time2;
var clocktimer2;

function pad2(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	//  newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);

    newTime = pad2(h, 2) + ':' + pad2(m, 2) + ':' + pad2(s, 2);
    
    return newTime;
}

function show2() {
	$time2 = document.getElementById('time2');
	update2();
    clocktimer2 = setInterval("update2()", 1);
    x2.start2();
}

function update2() {
	$time2.innerHTML = formatTime(x2.time2());
}

function start2() {
	clocktimer = setInterval("update2()", 1);
	x2.start();
}

function stop2() {
	x2.stop();
	clearInterval(clocktimer);
}

function reset2() {
	stop2();
	x2.reset();
	update2();
}