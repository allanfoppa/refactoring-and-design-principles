// SUBSTITUTE ALGORITHM

/**
 * Problem
 * So you want to replace an existing algorithm with a new one?
 */

function foundPerson(people) {
  for (let person of people) {
    if (person.equals("Don")) {
      return "Don";
    }
    if (person.equals("John")) {
      return "John";
    }
    if (person.equals("Kent")) {
      return "Kent";
    }
  }
  return "";
}

/**
 * Solution
 * Replace the body of the method that implements the algorithm with a new algorithm.
 */

function foundPerson(people) {
  let candidates = ["Don", "John", "Kent"];
  for (let person of people) {
    if (candidates.includes(person)) {
      return person;
    }
  }
  return "";
}

// FINAL NOTE:
// - Although it does the same thing, the new algorithm is more readable and easier to maintain.