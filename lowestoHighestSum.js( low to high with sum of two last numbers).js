// prob desc 


// given array of numbers lowest to high and show the sum of two lowest numbers



var sortd_list = [];
const lowestOfSum = (nlist)=>{
    nlist.sort();
    return sortd_list=nlist[0]+nlist[1];
}
const nlist2 = [1,6,3.2,66,68,68,96];

console.log(lowestOfSum(nlist2));
