import { PokemonType } from "./pokemon-type.js";
import Pokemon from "./Pokemon.js";

export class WaterPokemon extends Pokemon {
  // We call the parent (super) constructor with "Water" as the type
  constructor(name) {
    super(name, PokemonType.WATER); // Call the parent constructor with the name and type
  }

  // Polymorphism: we change the attack behavior for water Pokémon
  attack() {
    console.log(`${this.name} uses Water Gun!`);
  }
}