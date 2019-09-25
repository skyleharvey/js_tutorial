const Phrase = require('kyleharv-Palindrome');

function palindromeTester() {
  let testString = prompt("Please enter a string to test for palindrome-ness!");
  let testPhrase = new Phrase(testString);

let palindromeResults = document.querySelector("#palindromeResultsParagraph");

  if (testPhrase.palindrome()) {
    palindromeResults.innerHTML = `"<strong>${testPhrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResults.innerHTML = `"<strong>${testPhrase.content}</strong>" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let palindromeButton = document.querySelector("#palindromeTestButton");
  palindromeButton.addEventListener("click", function() {
    palindromeTester();
  });
});
