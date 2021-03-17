function differenceInAges(ages){
let oldest = Math.max(...ages);
let youngest = Math.min(...ages);
let difference = oldest - youngest;
let result = [youngest, oldest, difference];
return result;
}
    
console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

// best option:

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}