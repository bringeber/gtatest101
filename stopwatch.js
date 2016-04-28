document.addEventListener('DOMContentLoaded', function () {
    console.log("stop1.js");


    var clsStopwatch = function (div) {

        /*****************************************
         *  Private vars
         *****************************************/
        var startAt = 0;	// Time of last start / resume. (0 if not running)
        var lapTime = 0;	// Time on the clock when last stopped in milliseconds
        var that = this;


        /*****************************************
         *  jlobal var
         *****************************************/
        this.clocktimer;
        this.timerHTML = document.getElementById(div);


        /*****************************************
         *  Now
         *****************************************/
        this.now = function () {
            return (new Date()).getTime();
        };


        /*****************************************
         *  Pad?
         *****************************************/
        this.pad = function (num, size) {
            var s = "0000" + num;
            return s.substr(s.length - size);
        };


        /*****************************************
         *  format time
         *****************************************/
        this.formatTime = function (time) {
            var h = m = s = ms = 0;
            var newTime = '';

            h = Math.floor(time / (60 * 60 * 1000));
            time = time % (60 * 60 * 1000);
            m = Math.floor(time / (60 * 1000));
            time = time % (60 * 1000);
            s = Math.floor(time / 1000);
            ms = time % 1000;

            newTime = that.pad(h, 2) + ':' + that.pad(m, 2) + ':' + that.pad(s, 2);

            return newTime;
        };


        /*****************************************
         *  Start or resume
         *****************************************/
        this.start = function () {
            startAt = startAt ? startAt : that.now();
            that.clocktimer = setInterval(function () {
                that.timerHTML.innerHTML = that.formatTime(that.time());
            }, 1);
        };


        /*****************************************
         *  Stop or pause
         *****************************************/
        this.stop = function () {
            // If running, update elapsed time otherwise keep it
            lapTime = startAt ? lapTime + that.now() - startAt : lapTime;
            startAt = 0; // Paused
            clearInterval(that.clocktimer);
        };


        /*****************************************
         *  Reset
         *****************************************/
        this.reset = function () {
            that.stop();
            lapTime = startAt = 0;
            that.timerHTML.innerHTML = that.formatTime(that.time());

            lapTime = startAt = 0;
        };


        /*****************************************
         *  Duration
         *****************************************/
        this.time = function () {
            return lapTime + (startAt ? that.now() - startAt : 0);
        };


        /*****************************************
         *  Set main at creation
         *****************************************/
        this.timerHTML.innerHTML = that.formatTime(that.time());

    };


    /*****************************************
     *  Stop watch 1
     *****************************************/
    var stopwatch1 = new clsStopwatch("time2");
    stopwatch1.start();


    /*****************************************
     *  Stop watch 2
     *****************************************/
    var stopwatch2 = new clsStopwatch("time");

    var startBtn = document.getElementById('start1');
    startBtn.addEventListener("click", function () {
        stopwatch2.start();
    });

    var stopBtn = document.getElementById('stop1');
    stopBtn.addEventListener("click", function () {
        stopwatch2.stop()
    });

    var resetBtn = document.getElementById('reset1')
    resetBtn.addEventListener("click", function () {
        stopwatch2.reset()
    });


})







