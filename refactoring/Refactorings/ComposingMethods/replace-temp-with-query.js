// REPLACE TEMP WITH QUERY

/**
 * Problem
 * You place the result of an expression in a local variable for later use in your code.
 */

function calculateTotal() {
  let basePrice = quantity * itemPrice; // basePrice is a temporary variable
  if (basePrice > 1000) {
    return basePrice * 0.95;
  } else {
    return basePrice * 0.98;
  }
}

/**
 * Solution
 * Move the entire expression to a separate method and return the result from it. Query the method instead of using a variable.
 * Incorporate the new method in other methods, if necessary.
 */

function calculateTotal() {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  } else {
    return basePrice() * 0.98;
  }
}

function basePrice() {
  return quantity * itemPrice;
}

// FINAL NOTE:
// - The main goal is to replace the temporary variable with a method, in this way could be reused across the codebase.