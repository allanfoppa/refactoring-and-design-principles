// Define the Pokemon base class
class Pokemon {
  // Constructor to initialize the Pokemon's name, level, and type
  constructor(name, type) {
    this.name = name; // The name of the Pokemon
    this.type = type; // The type of the Pokemon (e.g., Psychic, Water)
  }

  // Method for the Pokemon to "speak" its name
  speak() {
    console.log(`${this.name}! ${this.name}!`); // Logs the Pokemon's name twice
  }

  // A default attack method (can be overridden by Polymorphism)
  attack() {
    console.log(`${this.name} uses a basic attack!`); // Logs a basic attack message
  }
}

// Export the Pokemon class as the default export
export default Pokemon;