<!-- Using the typeof operator and the strict equality operator I can compare two values and modify the function so it only returns equal when my value is strictly equal. -->
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
