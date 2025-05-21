// REMOVE ASSIGNMENTS TO PARAMETERS

/**
 * Problem
 * Some value is assigned to a parameter inside method’s body.
 */

function discount(inputVal, quantity) {
  if (quantity > 50) {
    inputVal -= 2; // <-- Problematic line
  }
  // ...
}

/**
 * Solution
 * Use a local variable instead of a parameter.
 */

function discount(inputVal, quantity) {
    let result = inputVal; // Use a local variable instead of a parameter
    if (quantity > 50) {
      result -= 2;
    }
    // ...
}