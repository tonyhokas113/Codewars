function noBoringZeros(n) {
    const number = String(n);
    let result = number;
    for (let i = 0; i < number.length; i++) {
      if (result.endsWith('0')) {
        result = result.substring(0, result.length - 1)
      }
    }
    return Number(result)
  }



console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)

  /*

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/

//Other option:

/*

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}

*/