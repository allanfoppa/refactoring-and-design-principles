// Original code with speculative generality
class Calculator {
  // This method is used
  sum(a, b) {
    return a + b;
  }

  // This method is used
  minus(a, b) {
    return a - b;
  }

  // This method is not used because is a future feature
  multiplication(a, b) {
    return a * b;
  }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.sum(5, 3)); // Output: 8
console.log(calculator.minus(5, 3)); // Output: 2

// The `multiplication` method is never used and can be removed to simplify the code.
// but before removing it, we can check if it is used in the codebase.