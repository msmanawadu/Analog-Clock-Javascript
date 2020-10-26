const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//get the current time
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

//Arm turning degrees (minute hand follows the second hand and hour hand follows the minute hand)
let hrPosition = (hr*360/12) + (min*(360/60)/12) ;
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

//injecting in-line CSS styles
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


