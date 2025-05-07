import { PokemonType } from "./pokemon-type.js";
import Pokemon from "./Pokemon.js";

export class PsychicPokemon extends Pokemon {
  // We call the parent (super) constructor with "Psychic" as the type
  constructor(name) {
    super(name, PokemonType.PSYCHIC); // Call the parent constructor with the name and type
  }

  // Polymorphism: we change the attack behavior for psychic Pokémon
  attack() {
    console.log(`${this.name} uses Psychic!`);
  }
}