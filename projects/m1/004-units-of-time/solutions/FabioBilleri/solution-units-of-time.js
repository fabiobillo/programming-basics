let days, hours, minutes, seconds, totSeconds;

days= +prompt ("insert the numers of the days")
hours = +prompt ("insert the numers of the hours");
minutes = +prompt ("insert the numers of the minutes");
seconds = +prompt ("insert the numers of the seconds");

totSeconds= seconds + (minutes*60) + (hours*60*60) + (days*60*60*24);
console.log(totSeconds);

alert("the total time in seconds are " + totSeconds);
