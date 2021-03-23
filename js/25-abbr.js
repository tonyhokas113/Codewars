function abbrevName(name){
    const words = name.split(' ');
    const abbr = words[0][0] + '.' + words[1][0];
        return abbr.toUpperCase();
    }


    console.log(abbrevName("Sam Harris"), "S.H");
    console.log(abbrevName("Patrick Feenan"), "P.F");
    console.log(abbrevName("Evan Cole"), "E.C");
    console.log(abbrevName("P Favuzzi"), "P.F");
    console.log(abbrevName("David Mendieta"), "D.M");

/*
   
Write a function to convert a name into initials. This kata strictly
 takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

//best option:

/*

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

*/