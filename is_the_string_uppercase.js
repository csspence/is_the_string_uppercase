/*
Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any 
string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function() {
  if(this.length === 0) {
    return true;
  }
  for(let i = 0; i < this.length; i++) {
    if(this[i].toUpperCase() !== this[i].toLowerCase() && this[i].toUpperCase() !== this[i]) {
      return false;
    }
  }
  return true;
}