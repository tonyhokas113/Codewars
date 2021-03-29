function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

  console.log(removeExclamationMarks("Hello! World!"), "Hello World");

  /*

  Write function RemoveExclamationMarks which removes all exclamation marks from
   a given string.

  */

   //other option:

   /*

   function removeExclamationMarks(s) {
  return s.split('!').join('');
}
*/