// Reverses a string.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

String.prototype.blank = function blank() {
  return !!(this.match(/^$/) || this.match(/^\s*$/));
}

Array.prototype.last = function last() {
  return this[this.length-1];
}

Array.prototype.last = function last() {
  return this.slice(this.length-1);
}

function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

console.log("".blank());
console.log(" ".blank());
console.log("   ".blank());
console.log(" fee a w   ".blank());
console.log("abc".blank());

let array = [1,2,3,4,5,6,7];
console.log(array);
console.log(array.last());
