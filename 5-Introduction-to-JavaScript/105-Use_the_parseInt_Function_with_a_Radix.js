<!-- uses a second argument for radix, specifying the base. Radix can be between 2 and 36 -->
function convertToInteger(str) {
  var radix = 2
  return parseInt(str, radix);
}

convertToInteger("10011");
