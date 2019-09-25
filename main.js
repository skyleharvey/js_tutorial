const Phrase = require('kyleharv-Palindrome');

function palindromeTester() {
  let testString = prompt("Please enter a string to test for palindrome-ness!");
  let testPhrase = new Phrase(testString);

  if (testPhrase.palindrome()) {
    alert(`"${testPhrase.content}" is a palindrome!`);
  } else {
    alert(`"${testPhrase.content}" is not a palindrome.`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let palindromeTestThingy = document.querySelector("#palindromeTestButton");
  palindromeTestThingy.addEventListener("click", function() {
    palindromeTester();
  });
});
