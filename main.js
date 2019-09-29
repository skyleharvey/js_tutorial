const Phrase = require('kyleharv-Palindrome');

function testPalindrome(event) {
  event.preventDefault();

  let palindromeTestText = new Phrase(event.target.palindromeTestText.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (palindromeTestText.palindrome()) {
    palindromeResult.innerHTML = `"${palindromeTestText.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${palindromeTestText.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let palindromeTestForm = document.querySelector("#palindromeTestForm");

  palindromeTestForm.addEventListener("submit", function() {
    testPalindrome(event);
  });
});
