// EXTRACT METHOD

/**
 * Problem
 *
 * You have a code fragment that can be grouped together.
 */

function printOwing() {
  printBanner();

  // Print details.
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}

/**
 * Solution
 *
 * Move this code to a separate new method (or function) and replace the old code with a call to the method.
 */

function printOwing() {
  printBanner();
  printDetails(getOutstanding());
}

function printDetails(outstanding) {
  console.log("name: " + name);
  console.log("amount: " + outstanding);
}

// FINAL NOTE:
// - Extracting printDetails from printOwing makes it clear that printing details is a distinct step, and now we can reuse or modify printDetails independently.
