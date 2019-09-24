(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const indexes = require('kyleharv-Palindrome');

let testString = prompt("Please enter a string to test for palindrome-ness!");
let testPhrase = new indexes.Phrase(testString);

let testPhraseTwo = new indexes.Goal("Wowzers!");

if (testPhrase.palindrome()) {
  alert(`"${testPhrase.content}" is a palindrome! ${testPhraseTwo.fun}`);
} else {
  alert(`"${testPhrase.content}" is not a palindrome. ${testPhraseTwo.content}`);
}

},{"kyleharv-Palindrome":2}],2:[function(require,module,exports){
module.exports = {
  Phrase,
  Goal
};

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
    return this.processedContent() === this.processedContent().reverse();
  }
}

function Goal(content) {
  this.content = content;
  this.fun = "NOT BAD!";
}

},{}]},{},[1]);
