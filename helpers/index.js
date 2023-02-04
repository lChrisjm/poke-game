export function getRandomInt() {
  let min = Math.ceil(1);
  let max = Math.floor(650);
  return Math.floor(Math.random() * (max - min) + min);
}
export function pickRandomPokemon(pokemons) {
  return pokemons[Math.floor(Math.random() * pokemons.length)];
}

export const initialState = {
  settings: {
    id: 0,
    level: 0,
    lifes: 0,
    questions: 0,
  },
  playerLifes: 1,
  pokemons: [],
  rightPokemon: "",
  playing: false,
  loading: false,
  answer: "",
  hideInputs: false,
  visible: false,
  gameFinish: false,
  misses: 0,
  hits: 0,
  entry: "",
  playerRounds: 1,
  playerRow: 0,
};