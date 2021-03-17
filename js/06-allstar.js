function strCount(str, letter){  
    let count = 0;
    if (letter.length === 1) {
   for (let i = 0; i < str.length; i++) {
       const element = str[i];
       if (str[i] === letter) {
           count++;
       }
    }  
   } else {
       return `Please pick one letter, rather than: ${letter}`
   }
    return count;
  }


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hellol', 'l'), 2);
console.log(strCount('', 'z'), 0);

//best option:

function strCount(str, letter){  
    return str.split(letter).length-1
  }