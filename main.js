const indexes = require('kyleharv-Palindrome');

let testString = prompt("Please enter a string to test for palindrome-ness!");
let testPhrase = new indexes.Phrase(testString);

let testPhraseTwo = new indexes.Goal("Wowzers!");

if (testPhrase.palindrome()) {
  alert(`"${testPhrase.content}" is a palindrome! ${testPhraseTwo.fun}`);
} else {
  alert(`"${testPhrase.content}" is not a palindrome. ${testPhraseTwo.content}`);
}
