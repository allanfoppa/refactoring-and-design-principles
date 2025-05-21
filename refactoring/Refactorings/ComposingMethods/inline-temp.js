// INLINE TEMP

/**
 * Problem
 * You have a temporary variable that’s assigned the result of a simple expression and nothing more.
 */

function hasDiscount(order) {
  let basePrice = order.basePrice();
  return basePrice > 1000;
}

/**
 * Solution
 * Replace the references to the variable with the expression itself.
 */

function hasDiscount(order) {
  return order.basePrice() > 1000;
}

// FINAL NOTE:
// - The main goal it's identify the temporary variable
// - Make sense identify and remove the temporary variable, cause it doesn't add any value to the code.
