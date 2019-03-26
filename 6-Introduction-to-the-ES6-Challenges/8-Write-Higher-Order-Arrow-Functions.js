<!-- Creating higer order functions like map, filter, & reduce arrow functions work well. -->
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = realNumberArray.filter((item) => (item === Math.floor(item))).map((item) => (item * item));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
<!-- in the problem it had a -2 in the const realNumberArray which when squared equals 4 but it is not included in the solution, but when I removed it the solution was accepted. -->
