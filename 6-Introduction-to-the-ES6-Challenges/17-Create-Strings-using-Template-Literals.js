<!-- using the tick, add quote or double quote in to the string without escaping them, I can add variable into the string also. -->
const result = {
 success: ["max-length", "no-amd", "prefer-arrow-functions"],
 failure: ["no-var", "var-on-top", "linebreak"],
 skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
 "use strict";

 // change code below this line
 const resultDisplayArray = arr.map((num) => {
   return `<li class="text-warning">${num}</li>`
 });
 // change code above this line

 return resultDisplayArray;
}
/**
* makeList(result.failure) should return:
* [ `<li class="text-warning">no-var</li>`,
*   `<li class="text-warning">var-on-top</li>`, 
*   `<li class="text-warning">linebreak</li>` ]
**/
const resultDisplayArray = makeList(result.failure);
