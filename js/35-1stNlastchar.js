function removeChar(str){
    return str.substring(1, str.length-1)
   };

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

/*

It's pretty straightforward. Your goal is to create a function that
 removes the first and last characters of a string. You're given one
  parameter, the original string. You don't have to worry with strings
   with less than two characters.

*/

// best option:

/*

function removeChar(str) {
  return str.slice(1, -1);
}

*/

