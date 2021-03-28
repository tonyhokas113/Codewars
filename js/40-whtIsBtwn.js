function between(a, b) {
    let ans = [];
    for (let i = a; i <= b; i++) {
        ans.push(i);
    }
    return ans;
  }

 console.log(between(1, 4), [1, 2, 3, 4]);
 console.log(between(-2, 2), [-2, -1, 0, 1, 2]);


/*


Complete the function that takes two integers (a, b, where a < b) and
 return an array of all integers between the input parameters, including 
 them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

//best option:

/*

function between(a, b) {
  return Array(b - a + 1).fill(1).map((_, i) => a + i)
}

*/