//prblem desc 
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


// additionaly i have written to check weather all data are complete or not to make a catergory 

const checkOpenOrSenior = (data)=>{
     return data.map((info)=>{
        if(info[0]>=55 && info[1]>7){
            return "senior";
        }else if(info[0]==null || info[1]==null){
            return "data not provided";
        }else{
            return "open";
        }
    });
    
}


console.log(checkOpenOrSenior([[23,9],[88,12],[56,7],[],[45,8],[58]]));
