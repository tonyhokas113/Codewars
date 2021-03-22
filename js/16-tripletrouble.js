function tripleTrouble(one, two, three) {

let junginys = [];
for (let i = 0; i < one.length; i++) {
   junginys.push(one[i]);
   junginys.push(two[i]);
   junginys.push(three[i]);
   
   }
return junginys.join('');
}
     

   console.log(tripleTrouble("aa","bb","cc"), "abcabc");
   console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
   console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
   console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");

/*
   Triple Trouble
Create a function that will return a string that combines all of the
 letters of the three inputed strings in groups. Taking the first letter
  of all of the inputs and grouping them next to each other. Do this 
  for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

//best option
/*
function tripleTrouble(one, two, three){
   let combo = '';
   for (let i = 0; i < one.length; i++) {
     combo += one[i] + two[i] + three[i];
   }
   return combo;
}
*/