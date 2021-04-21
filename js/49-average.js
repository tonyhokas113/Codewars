function find_average(array) {
    let sum = 0;
    
   for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    return sum / array.length;
  }

  console.log(find_average([1,1,1]), 1);
  console.log(find_average([1,2,3]), 2);
  console.log(find_average([1,2,3,4]), 2.5);

  /* Best option:

  function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

*/

