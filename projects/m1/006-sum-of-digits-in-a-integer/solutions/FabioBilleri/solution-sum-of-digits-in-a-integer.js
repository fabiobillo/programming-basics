let userNum;
userNum= prompt('Type a 4-digit number!', 0);
let userNum1=userNum[0];
let userNum2=userNum[1];
let userNum3=userNum[2];
let userNum4=userNum[3];


if(isNaN(userNum)) {
  alert('It is not a number'); 
} else if (userNum.toString().length !=4) {
    alert ('you must enter a 4-digit number');    
} else {
    alert ('The sum of your number digits is: ' + (+userNum1+ +userNum2+ +userNum3+ +userNum4));
};

