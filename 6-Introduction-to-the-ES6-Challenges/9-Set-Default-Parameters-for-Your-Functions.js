<!-- creating flexibility with default parameters for functions.  When the argument is not specified (undefined) then the default parameter begins working. -->
function increment(number, value = 1) {
  return number + value;
}
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
