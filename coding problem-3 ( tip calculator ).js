/*Problem:

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).*/


const bill = 275;
var tip =0;
var total =0;
var op ="";
if(bill>=50 && bill<=300){
    tip = (bill*15)/100;
    console.log(bill);
    console.log(tip);
    total = bill+tip;
    console.log(total);
     
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}else{
    tip = (bill*20)/100;
    console.log(tip);
    total = bill+tip;
    console.log(total);
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}
//2

 
