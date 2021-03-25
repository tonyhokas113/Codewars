const reverseSeq = n => {
    let nr = [];
    let ans = [];
    for (let i = n; i > 0 ; i--) {
        nr = ans.push(i)
    }
    return ans;
  };

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

/*

  Build a function that returns an array of integers from n to 1 where
   n>0.

Example : n=5 >> [5,4,3,2,1]

*/

//best option:

/*

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

*/