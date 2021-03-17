function tripleTrouble(one, two, three) {
    let text ='';
    for (let i = 0; i < one.length; i++) {
        let fir = one[i];
    for (let t = 0; t < two.length; t++) {
        let sec = two[t];
    for (let b = 0; b < three.length; b++) {
        let thi = three[b];
        return text = fir + sec + thi;
    }  
    }
    
   }
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