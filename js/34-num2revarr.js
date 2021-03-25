function digitize(n) {
    let str = String(n);
    return str.split('').map(Number).reverse();
   }
   
   console.log(digitize(35231),[1,3,2,5,3]);
  
   /*

   Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of 
this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

*/

//other option:

/*

function digitize(n) {
  let str = n+"";
  let arr = [];
  for (let i = str.length-1; i>=0; i--)  arr.push(+str[i]);
  return arr;
}

*/