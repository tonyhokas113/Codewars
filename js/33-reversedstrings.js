function solution(str){
    let reverse = '';
    for (let i = 0; i < str.length; i++) {
        reverse = str[i] + reverse;
    }
    return reverse;
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

*/

//best option:

/*

function solution(str){
  return str.split('').reverse().join('');  
}

*/