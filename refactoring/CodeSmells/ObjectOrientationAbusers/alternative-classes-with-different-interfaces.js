// NOTE: EXAMPLE GENERATED BY AI AND REFACTORED BY ME

// Before Refactoring: Two classes with different method names but identical functionality
class PrinterA {
  printText(text) {
    console.log(`PrinterA: ${text}`);
  }
}

class PrinterB {
  outputText(text) {
    console.log(`PrinterB: ${text}`);
  }
}

// After Refactoring: Unified interface with identical method names
class Printer {
  print(text) {
    console.log(`Printer: ${text}`);
  }
}

// Example usage
const printerA = new Printer();
printerA.print("Hello from PrinterA!");

const printerB = new Printer();
printerB.print("Hello from PrinterB!");
