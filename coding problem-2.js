/*There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

problem

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win,*/

 

var scoresDol = [96, 108,89];
var scoresKola = [88, 91,110];
let sum1 =0;
let sum2 = 0;
scoresDol.forEach(x=>{
    sum1+=x;
    
})
console.log(sum1)
scoresKola.forEach(x=>{
    sum2+=x;
    
})
var scoreDolphins = (sum1/scoresDol.length);
var scoreKoalas = (sum2/scoresKola.length);

((scoreDolphins>scoreKoalas)?console.log("Dolphins win the trophy"):console.log("Koalas win the trophy"));




