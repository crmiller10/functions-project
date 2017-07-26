// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
console.log(max(5, 1));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
console.log(max(1, 3, 9));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(x){
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      console.log("true");
    }else {
      console.log("false");
    }
}
isVowel("a");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
  return num1 + num2;
}
let sumTotal = sum(2, 7);

console.log(sumTotal);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.


function avg (num1, num2, num3) {
  return ((num1 + num2 + num3)/3);
}
console.log(avg(5,5,5));



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  return (string.length);
}

console.log(getLength("string"));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (num1, num2) {
  return num1 < num2;
}

console.log(greaterThan(3, 5) === true);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
// Our Greeting Function
function greeting (firstName) {
  console.log('Hello, ' + firstName + '!');
}
// Calling Our Function
greeting('Collin');


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1, word2, word3, word4) {
  return ("The " + word1 + " brown " + word2 + " jumps " + word3 + " the " + word4);
}
console.log(madlib("quick", "fox", "over", "fence"));