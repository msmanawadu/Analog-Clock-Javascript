const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Arm turning degrees
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

//get the current time
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

console.log(hr + " Hours " + min + " minutes " + sec + " seconds");

//injecting in-line CSS styles
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


