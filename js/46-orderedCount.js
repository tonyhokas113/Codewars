function orderedCount(text) {
    let arr = [];
    let res = [];
    for (let i = 0; i < text.length; i++) {
        arr += text[i];
        arr.split('')
        console.log(arr.split(''))
    }
    
    return arr;
  }

console.log(orderedCount('vaigaudas'))
  // ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
  // ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
  // ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],



/*

Count the number of occurrences of each character and return it as a 
list of tuples in order of appearance. For empty output return an empty 
list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/