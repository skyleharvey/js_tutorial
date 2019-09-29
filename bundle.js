(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"kyleharv-Palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}

},{}]},{},[1]);
