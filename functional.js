let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify (string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// MAP FUNCTION

function modifyUrls (elements) {
  // newArray = [];
  // elements.forEach(function(element) {newArray.push(urlify(element))})
  // return newArray;
  return elements.map(element => urlify(element));
}
console.log(modifyUrls(states));

// FILTER FUNCTION

function selectSingleNames (elements) {
  // let newArray = [];
  //
  // elements.forEach(function(element) {
  //   if (element.split(/\s+/).length === 1) {
  //     newArray.push(element);
  //   }
  // })
  //
  // return newArray;
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(selectSingleNames(states));

// REDUCE FUNCTION

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum (array) {
  // let total = 0;
  // array.forEach(function(currentValue){
  //   total += currentValue;
  // })
  // return total;
  return array.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
}

console.log(sum(numArray));







// EXERCISE 1 ANSWER

function numberProduct (elements) {return elements.reduce(((accumulator, currentValue) => accumulator *= currentValue), 1);}

console.log(numberProduct(numArray));

// TRY THIS, THEN WATCH SECTION 6.3

// make a plain JavaScript object (Section 4.4) that maps state names to the length of each name, with a result that will look like this:
//
// { "Kansas": 6,
//   "Nebraska": 8,
//   .
//   .
//   .
// }

let foo = [2,4,8,16];

function reduceMultiples (elements) {
  return elements.reduce((accumulator, currentValue) => accumulator*=currentValue);
}

console.log(reduceMultiples(foo));

let bar = ["a", "ab", "abc", "abcd", "feed", "me"];

function elementLengths (myArray) {
  let myObject = {};
  myArray.forEach(function(element) {
    myObject[element] = element.length;
  })
  return myObject;
}

console.log(elementLengths(bar));


function functionalElementLengths (elements) {
  return elements.reduce((myObject,currentValue) => myObject[currentValue] = currentValue.length);
}

console.log(functionalElementLengths(bar));


function arrayLengths (elements) {
  return elements.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = currentValue.length;
    return accumulator
  }, {});
}

console.log(arrayLengths(states));



// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));
