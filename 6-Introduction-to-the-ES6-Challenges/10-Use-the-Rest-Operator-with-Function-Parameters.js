<!-- Rest operator allow for flexibility for function parameters.  These arguments can be stored in an array for later access. -->
function sum(...args) {
  return args.reduce((a,b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6


<!--  I also use the array function but it would not complete. -->
  function sum(...array) {
  return array.reduce((a,b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
