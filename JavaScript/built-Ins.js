/*
Math Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

Math.random();   // generate random num in range(0, 1)
Math.random() * 100;    // generate random num in range(0, 100)

Math.floor(...);   // round down to nearest whole num
Math.floor(Math.random() * 100);

// Display results
console.log(Math.floor(Math.random() * 100));
// e.g 86

/*
Number Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

Number.isInteger(valueToBeChecked);   // check if num is an int

// Display results
console.log(Number.isInteger(2022));
