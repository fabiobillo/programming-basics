console.log('pippo');

let changeAmount, cashRemained, penny, nickel, dime, quarter, loonie, toonie;

changeAmount= +prompt("How many dollar do you have to give to the shopper?")*100;

toonie= Math.floor(changeAmount/200);
cashRemained=changeAmount % 200;

console.log(cashRemained);

loonie= Math.floor(cashRemained/100);
cashRemained=cashRemained % 100;
console.log(cashRemained);

quarter= Math.floor(cashRemained/25);
cashRemained=cashRemained % 25;
console.log(cashRemained);

dime= Math.floor(cashRemained/10);
cashRemained=cashRemained % 10;
console.log(cashRemained);
nickel= Math.floor(cashRemained/5);
cashRemained=cashRemained % 5;
console.log(cashRemained);
penny= Math.floor(cashRemained/1);
cashRemained=cashRemained % 1;
console.log(cashRemained);

alert( `You should give to the shopper these coins: 
${toonie+ (" toonies")}, ${loonie+ (" loonies")}, ${quarter+ (" quarters" )}, ${dime+ (" dimes" )}, ${nickel+ (" nickels" )}, ${penny+ (" pennies.")}` );

