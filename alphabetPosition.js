//problem desc 


//get the position of each letter in a senetence 


const alphabets="abcdegfgijklmnopqrstuvwxyz".split("");
const alphaPosition = (txt)=>{
    return txt.toLowerCase().replace(/[^a-zA-Z]/g, "").split("").map((letter)=>alphabets.indexOf(letter)+1).join(" ");  
    
};   
console.log(alphaPosition("good things good thoughts"));
