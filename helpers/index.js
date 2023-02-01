export function getRandomInt() {
  let min = Math.ceil(1);
  let max = Math.floor(650);
  return Math.floor(Math.random() * (max - min) + min);
}
export function pickRandomPokemon(pokemons) {
  return pokemons[Math.floor(Math.random() * pokemons.length)];
}
