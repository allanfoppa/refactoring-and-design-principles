import { PsychicPokemon } from "./PsychicPokemon.js";
import Trainer from "./Trainer.js";
import { WaterPokemon } from "./WaterPokemon.js";

const pokemons = [
  new WaterPokemon("Squirtle"),
  new PsychicPokemon("Abra")
];

// Each Pokémon "speaks" and "attacks" in their own way
pokemons.forEach(p => {
  p.speak();  // All Pokémon say their name
  p.attack(); // Each Pokémon has its own version of attack beacuse of polymorphism
});

const trainer = new Trainer("Allan Foppa");

trainer.addPokemon(new PsychicPokemon("Alakazam"));
trainer.addPokemon(new PsychicPokemon("Alakazam")); // ❌ Duplicate
trainer.addPokemon(new WaterPokemon("Blastoise"));
trainer.addPokemon(new WaterPokemon("Vaporeon"));
trainer.addPokemon(new PsychicPokemon("Mewtwo"));
trainer.addPokemon(new WaterPokemon("Psyduck"));
trainer.addPokemon(new PsychicPokemon("Espeon"));
trainer.addPokemon(new WaterPokemon("Poliwrath")); // ❌ Team full

trainer.showTeam();