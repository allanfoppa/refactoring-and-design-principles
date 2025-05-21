// REPLACE METHOD WITH METHOD OBJECT

/**
 * Problem
 * You have a long method in which the local variables are so intertwined that you can’t apply Extract Method.
 */

class Order {
  // ...
  price() {
    let primaryBasePrice;
    let secondaryBasePrice;
    let tertiaryBasePrice;
    // Perform long computation.
  }
}

/**
 * Solution
 * Transform the method into a separate class so that the local variables become fields of the class.
 * Then you can split the method into several methods within the same class.
 */

class Order {
  // ...
  price() {
    return new PriceCalculator(this).compute();
  }
}

class PriceCalculator {
  _primaryBasePrice;
  _secondaryBasePrice;
  _tertiaryBasePrice;

  constructor(order) {
    // Copy relevant information from the
    // order object.
  }

  compute() {
    // Perform long computation.
  }
}

// FINAL NOTE:
// - It's good to isolate in smaller codes, and transform local variables into fields of the class.
