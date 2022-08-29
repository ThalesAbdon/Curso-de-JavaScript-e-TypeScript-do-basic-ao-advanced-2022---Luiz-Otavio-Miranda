enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}
console.log(Cores);
console.log(Cores[0]);

enum Pokemons {
  Bulbasaur = 1,
  Squirtle = 2,
  Charmander = 3,
}

console.log(Pokemons);
console.log(Pokemons[2]);

function escolheOPokemon(pokemon: Pokemons): void {
  console.log(Pokemons[pokemon]);
}

escolheOPokemon(Pokemons.Bulbasaur);
