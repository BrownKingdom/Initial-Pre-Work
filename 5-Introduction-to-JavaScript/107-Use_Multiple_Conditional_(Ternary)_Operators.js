<!-- With the teneray/conditional operator I can chain to check multiple conditions. -->
function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);
