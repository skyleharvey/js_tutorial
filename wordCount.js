const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// define list of words into an array using a regex
let sonnetWordsUncounted = sonnet.match(/[\w']+/g);
let sonnetWordsCounted = new Object();
console.log(sonnetWordsUncounted);

// iterate through the array one word at a time using a for loop
  // if the word has not yet appeared, add it to a new object
  // if the word has already appeared in our array, increase the count for that word by one

for (let i = 0; i < sonnetWordsUncounted.length; i++) {
  if (sonnetWordsCounted[sonnetWordsUncounted[i]]) {
    sonnetWordsCounted[sonnetWordsUncounted[i]] += 1;
    console.log(`old word: ${sonnetWordsUncounted[i]}
      count: ${sonnetWordsCounted[sonnetWordsUncounted[i]]}`);
  } else {
    sonnetWordsCounted[sonnetWordsUncounted[i]] = 1;
    console.log(`old word: ${sonnetWordsUncounted[i]}
      count: 1`);
  }
}

// print array of counted sonnet words
console.log(sonnetWordsCounted);
