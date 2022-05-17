let days, hours, minutes, seconds, totSeconds, timeRemained;

totSeconds=+prompt("insert the numbers of the seconds")

seconds=  totSeconds % 60
minutes= Math.floor(totSeconds/60);
minutes=minutes % 60;
hours= Math.floor(totSeconds/3600);
hours=hours % 24;
days= Math.floor(totSeconds/86400);


alert("These seconds correspond to " + ("00"+days).slice(-2) +":" + ("00"+hours).slice(-2)+ ":"+("00"+ minutes).slice(-2) +":"+("00"+seconds).slice(-2));

