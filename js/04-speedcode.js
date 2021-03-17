function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i] ** 2;
    }
    for (let x = 0; x < b.length; x++) {
        sum2 += b[x] ** 3;
    }
    return sum1 > sum2 ? true : false;
  }

console.log(arrayMadness([4,5,6],[1,2,3]));

//best option:


const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

