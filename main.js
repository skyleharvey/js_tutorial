const Phrase = require('kyleharv-Palindrome');

let testString = prompt("Please enter a string to test for palindrome-ness!");
let testPhrase = new Phrase(testString);

if (testPhrase.palindrome()) {
  alert(`"${testPhrase.content}" is a palindrome!`);
} else {
  alert(`"${testPhrase.content}" is not a palindrome.`);
}
