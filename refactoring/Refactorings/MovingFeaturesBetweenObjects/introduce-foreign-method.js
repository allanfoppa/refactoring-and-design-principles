/**
 * Problem
 * A utility class doesn’t contain the method that you need and you can’t add the method to the class.
 */

class Report {
  // ...
  sendReport() {
    let nextDay = new Date(
      previousEnd.getYear(),
      previousEnd.getMonth(),
      previousEnd.getDate() + 1
    );
    // ...
  }
}

/**
 * Solution
 * Add the method to a client class and pass an object of the utility class to it as an argument.
 */

class Report {
    // ...
    sendReport() {
      let newStart = nextDay(previousEnd);
      // ...
    }
    static _nextDay(arg) {
      return new Date(arg.getFullYear(), arg.getMonth(), arg.getDate() + 1);
    }
  }


// FINAL NOTE:
// This is a simple example of moving a method from a utility class to a client class.
// In practice, you would need to ensure that the method is relevant to the client class and that it makes sense to pass the utility
