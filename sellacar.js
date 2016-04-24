

// set the date we're counting down to
var target_date = new Date().getTime()+0;//+(45*60000);






// variables for time units
var days, hours, minutes, seconds;

// get tag element



var countdown = document.getElementById("lsc_date_time");



// update the tag with id "countdown" every 1 second
setInterval(function ()
            {
            
            
            /// LSC Countdown
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
            
            var lscSign=" ";
            if (seconds_left < 0) lscSign="-";
            seconds_left=Math.abs(seconds_left);
            
            
            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
            
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
            
            var xpad = function(num)
            {
            return ("0"+num).slice(-2)
            }
            
            // format countdown string + set tag value
            countdown.innerHTML =  lscSign + xpad(hours) + ":" + xpad(minutes) + ":" + xpad(seconds) + "";
            countdown.textContent =  lscSign + xpad(hours) + ":" + xpad(minutes) + ":" + xpad(seconds) + "";
            
            
            
            
            
            
            
            }, 1000);



function sellACar()
{
    target_date=new Date().getTime()+(48*60000);
}
