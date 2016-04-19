/**
 * Created by vegar on 4/17/2016.
 */

// get tag element
var curFontSize = 24; 
var target_date_fme;
var target_date;
var target_date_met;
var gtao_time = document.getElementById("current_date_time");
// update the tag with id "countdown" every 1 second
setInterval(function () {

    var getCurrentTimeUTC = function () {

        var returnValue = 0;
        //RETURN:
        //      = number of milliseconds between current UTC time and midnight of January 1, 1970
        var tmLoc = new Date();
        //The offset is in minutes -- convert it to ms
        var TZOffset = tmLoc.getTimezoneOffset();
        TZOffset = TZOffset * 60000;
        returnValue = tmLoc.getTime();
        returnValue = returnValue + TZOffset;
        return returnValue;
    }
    var pad = function (num) {
        return ("0" + num).slice(-2)
    }



    //GTAO Time
        var d;
    d = new Date();
    var epochtime = 0;
    //d.setTime(0);
    epochtime = d.valueOf();
    //d=new Date(getCurrentTimeUTC());

    epochtime = d.valueOf();
    ///epochtime=d.UTC();//didnt work

    epochtime = epochtime - (5 * 60 * 1000); // hours
    epochtime = epochtime + (76 * 1000);//minutes
    epochtime = epochtime * (30);//this is the magic;
    //epochtime=epochtime*(30);//for testing
    epochtime = epochtime - 42687899985970;//arbitrary...just to keep the TDS small


            
    d = new Date(epochtime);
    //d.setTime(epochtime);
    //hours=d.getHours();
    //minutes=d.getMinutes();
    hours = d.getUTCHours();
    minutes = d.getUTCMinutes();

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";


    var dowAdjust = 1;
    dowAdjust = parseInt(dowOffset.value);
    var dow = weekday[(d.getUTCDay() + dowAdjust) % 7];
    gtao_time.innerHTML = dow + " " + pad(hours) + ":" + pad(minutes);
    gtao_time.textContent = dow + " " + pad(hours) + ":" + pad(minutes);

}, 1000);
