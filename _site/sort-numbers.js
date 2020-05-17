let numberArray = [42, 23, 16, 15, 8, 4];
console.log("original: " + numberArray);
console.log("sorted with the 'sort' method: " + numberArray.sort());

function compare(a, b) {
  return a - b;
}

numberArray.sort(compare);

console.log("sorted with new sort method: " + numberArray);
