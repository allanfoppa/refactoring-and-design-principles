// 🎭 Abstraction + Encapsulation: the Trainer class hides internal team logic
class Trainer {
  // The team is kept private using a # prefix (JS private field syntax)
  #team = [];
  #maxTeamSize = 6; // Only used inside the class

  constructor(name) {
    this.name = name;
  }

  /**
   * Public method to add a Pokémon to the team.
   * Handles all internal logic: team size, duplicates, etc.
   */
  addPokemon(pokemon) {
    const teamIsFull = this.#team.length >= this.#maxTeamSize;
    if (teamIsFull) {
      console.log(`❌ ${this.name}'s team is full! Can't add ${pokemon.name}.`);
      return;
    }

    const alreadyExists = this.#team.some(p => p.name === pokemon.name);
    if (alreadyExists) {
      console.log(`❌ ${pokemon.name} is already in ${this.name}'s team.`);
      return;
    }

    this.#team.push(pokemon);
    console.log(`✅ ${pokemon.name} was added to ${this.name}'s team.`);
  }

  /**
   * Public method to show the trainer's team.
   * Users don't access the team directly, only through this view.
   */
  showTeam() {
    console.log(`👤 ${this.name}'s team:`);

    if (this.#team.length === 0) {
      console.log("(No Pokémon yet)");
      return;
    } 

    this.#team.forEach(p =>
    console.log(`${p.name} (${p.type})`)
    );
  }
}

export default Trainer;
