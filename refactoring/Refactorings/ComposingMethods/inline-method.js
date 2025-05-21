// INLINE METHOD

/**
 * Problem
 *
 * When a method body is more obvious than the method itself, use this technique.
 */

class PizzaDelivery {
  // ...
  getRating() {
    return moreThanFiveLateDeliveries() ? 2 : 1;
  }
  moreThanFiveLateDeliveries() {
    return numberOfLateDeliveries > 5;
  }
}

/**
 * Solution
 *
 * Replace calls to the method with the method’s content and delete the method itself.
 */

class PizzaDelivery {
  // ...
  getRating() {
    return numberOfLateDeliveries > 5 ? 2 : 1;
  }
}

// FINAL NOTE:
// - In this case, the method moreThanFiveLateDeliveries is just increase the numbers os methods of class and doing nothing more than inline method resolves.
