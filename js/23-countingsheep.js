function countSheeps(arrayOfSheep) {
    let result = 0;
        for (let i = 0; i < arrayOfSheep.length; i++) {
            if (arrayOfSheep[i] === true) {
                result++
            }
        }
    return result;
  }
  

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(array1), "There are 17 sheeps in total")



/*


Consider an array/list of sheep where some sheep may be missing from
 their place. We need a function that counts the number of sheep
  present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

//best option:
/*

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  */