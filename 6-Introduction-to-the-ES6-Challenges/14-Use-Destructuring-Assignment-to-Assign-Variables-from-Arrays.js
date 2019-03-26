<!-- reassign on value to a variable not in the parameter then move around. -->
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  const c = a;
  a = b;
  b = c;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
