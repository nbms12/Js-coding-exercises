//Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

//1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

//"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

//2. Modify the outputs above to use template literals to include the BMI values in the outputs.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log(BMIMark, BMIJohn);
(BMIJohn>BMIMark)?console.log("John's BMI is higher than Mark's!"):console.log("Mark's BMI is higher than John's!");

/* Write your code below. Good luck! 🙂 */
  
if(BMIJohn>BMIMark){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's  (${BMIMark})!`);
}else{
    console.log(`Mark's BMI (${BMIMark}) is higher than   John's (${BMIJohn})!`);
}




