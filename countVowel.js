//dec 

//count number of vowels in given string name 


const getCounts = (txt)=>{
    var vowelCounts =0;
    for(const x of txt){
        if(x==="a" || x==="e" ||x==="i" ||x==="o" ||x==="u"){
            vowelCounts=vowelCounts+1;
             
        }
    }

    return console.log(`your name ${txt} has ${vowelCounts} vowel count`);
}


//test 
console.log(getCounts("Fedrick albert"));
