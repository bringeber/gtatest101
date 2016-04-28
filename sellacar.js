document.addEventListener('DOMContentLoaded', function () {
    console.log("sell a car.js");


    /*****************************************
     *  set the date we're counting down to
     *****************************************/
    var target_date = new Date().getTime() + 0;

    /*****************************************
     *  variables for time units
     *****************************************/
    var days, hours, minutes, seconds;
    var countdown = document.getElementById("lsc_date_time");


    /*****************************************
     *  update the tag with id "countdown" every 1 second
     *****************************************/


        sellACarTimer = function(){



        /// LSC Countdown
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        var lscSign = " ";
        if (seconds_left < 0) lscSign = "-";
        seconds_left = Math.abs(seconds_left);


        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        var xpad = function (num) {
            return ("0" + num).slice(-2)
        };

        // format countdown string + set tag value
        countdown.innerHTML = lscSign + xpad(hours) + ":" + xpad(minutes) + ":" + xpad(seconds) + "";
        countdown.textContent = lscSign + xpad(hours) + ":" + xpad(minutes) + ":" + xpad(seconds) + "";
        }


    countdown.innerHTML = "-00:00:00"
    setInterval(function () {
        sellACarTimer();
    }, 1000);


    /*****************************************
     *  sell a car function
     *****************************************/
    var sellACar = function () {
        target_date = new Date().getTime() + (48 * 60000);
    };

    /*****************************************
     *  get button and start
     *****************************************/
    var resetBtn = document.getElementById('sellcar');
    resetBtn.addEventListener("click", function () {
        sellACar()
    });

});