/*
toonie= 200;
loonie= 100;
quarter= 25;
dime= 10;
nickel= 5;
penny= 1;
*/

let changeAmount; 
let toonie;
let loonie;
let quarter;
let dime;
let nickel;
let penny;
let cashRemained;


changeAmount= +prompt("How many cents do you have to give to the shopper?")*100;

toonie= Math.floor(changeAmount/200);
cashRemained= changeAmount % 200;

loonie= Math.floor(cashRemained/100);
cashRemained= cashRemained % 100;

quarter= Math.floor(cashRemained/25);
cashRemained= cashRemained % 25;

dime= Math.floor(cashRemained/10);
cashRemained= cashRemained % 10;

nickel= Math.floor(cashRemained/5);
cashRemained= cashRemained % 5;

penny= Math.floor(cashRemained/1);
cashRemained= cashRemained % 1;

alert( `You should give to the shopper these coins: 
${toonie+ (" toonies")}, ${loonie+ (" loonies")}, ${quarter+ (" quarters" )}, ${dime+ (" dimes" )}, ${nickel+ (" nickels" )}, ${penny+ (" pennies.")}` );