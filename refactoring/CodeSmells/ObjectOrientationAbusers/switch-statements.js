// NOTE: EXAMPLE GENERATED BY AI AND REFACTORED BY ME

// Before Refactoring: Using a switch statement
class BirdBefore {
  constructor(type) {
    this.type = type;
  }

  getSpeed() {
    switch (this.type) {
      case "EuropeanSwallow":
        return 35;
      case "AfricanSwallow":
        return 20;
      case "NorwegianBlueParrot":
        return 15;
      default:
        throw new Error("Unknown bird type");
    }
  }
}

// Usage
const birdBefore = new BirdBefore("EuropeanSwallow").getSpeed();
console.log(birdBefore); // Output: 35

// After Refactoring: Using polymorphism

// Avoid magic strings
const BIRDS = {
    EuropeanSwallow: "EuropeanSwallow",
    AfricanSwallow: "AfricanSwallow",
    NorwegianBlueParrot: "NorwegianBlueParrot",
}
const ERROR_MESSAGE = "Unknown bird type";

class BirdAfter {
  getSpeed() {
    throw new Error("This method should be implemented by subclasses");
  }
}

class EuropeanSwallow extends BirdAfter {
  getSpeed() {
    return 35;
  }
}

class AfricanSwallow extends BirdAfter {
  getSpeed() {
    return 20;
  }
}

class NorwegianBlueParrot extends BirdAfter {
  getSpeed() {
    return 15;
  }
}

// Usage
class GetBird {
  static get(type) {
    switch (type) {
      case BIRDS.EuropeanSwallow:
        return new EuropeanSwallow();
      case BIRDS.AfricanSwallow:
        return new AfricanSwallow();
      case BIRDS.NorwegianBlueParrot:
        return new NorwegianBlueParrot();
      default:
        throw new Error(ERROR_MESSAGE);
    }
  }
}

const birdAfter = GetBird.get(BIRDS.AfricanSwallow).getSpeed();
console.log(birdAfter); // Output: 20

// FINAL NOTE:
// - The code uses polymorphism to take full advantage of it.
// - It's easier to add new bird types in the future without modifying existing code.
