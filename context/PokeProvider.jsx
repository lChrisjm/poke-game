import { useState, createContext, useEffect } from "react";
import { GAMEMODES } from "../constants";
import axios from "axios";
import { getRandomInt, pickRandomPokemon, initialState } from "../helpers";

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const {
    settings: settingsInitial,
    playerLifes: playerLifesInitial,
    pokemons: pokemonsInitial,
    rightPokemon: rightPokemonInitial,
    playing: playingInitial,
    loading: LoadingInitial,
    answer: answerInitial,
    hideInputs: hideInputsInitial,
    visible: visibleInitial,
    gameFinish: gameFinishInitial,
    misses: missesInitial,
    hits: hitsInitial,
    entry: entryInitial,
    playerRounds: playerRoundsInitial,
    playerRow: playerRowInitial,
  } = initialState;

  const [settings, setSettings] = useState(settingsInitial);
  const [playerLifes, setPlayerLifes] = useState(playerLifesInitial);
  const [pokemons, setPokemons] = useState(pokemonsInitial);
  const [rightPokemon, setRightPokemon] = useState(rightPokemonInitial);
  const [playing, setPlaying] = useState(playingInitial);
  const [loading, setLoading] = useState(LoadingInitial);
  const [answer, setAnswer] = useState(answerInitial);
  const [hideInputs, setHideInputs] = useState(hideInputsInitial);
  const [visible, setVisible] = useState(visibleInitial);
  const [gameFinish, setGameFinish] = useState(gameFinishInitial);
  const [misses, setMisses] = useState(missesInitial);
  const [hits, setHits] = useState(hitsInitial);
  const [entry, setEntry] = useState(entryInitial);
  const [playerRounds, setPlayerRounds] = useState(playerRoundsInitial);
  const [playerRow, setPlayerRow] = useState(playerRowInitial);

  function playAgain() {
    setSettings(settingsInitial);
    setPlayerLifes(playerLifesInitial);
    setPokemons(pokemonsInitial);
    setRightPokemon(rightPokemonInitial);
    setPlaying(playingInitial);
    setLoading(LoadingInitial);
    setAnswer(answerInitial);
    setHideInputs(hideInputsInitial);
    setVisible(visibleInitial);
    setGameFinish(gameFinishInitial);
    setMisses(missesInitial);
    setHits(hitsInitial);
    setEntry(entryInitial);
    setPlayerRounds(playerRoundsInitial);
    setPlayerRow(playerRowInitial);
  }

  const handleLevelSelector = (nivel) => {
    const selectedSetting = GAMEMODES.find((setting) => setting.id == nivel);
    setSettings(selectedSetting);
  };

  const handleRightResponse = async () => {
    if (pokemons.length) {
      let respuesta = await pickRandomPokemon(pokemons);
      setRightPokemon(respuesta);
    }
  };

  const ConsultarAPI = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_URL;
      const urls = Array.from(
        { length: 4 },
        () => `${baseURL}/${getRandomInt()}`
      );

      const pokemonIds = new Set();
      const pokemonsArray = [];

      for (const url of urls) {
        const res = await axios.get(url);
        const pokemon = res.data;

        while (pokemonIds.has(pokemon.id)) {
          pokemon.id = getRandomInt();
        }
        pokemonIds.add(pokemon.id);
        pokemonsArray.push({
          name: pokemon.name,
          id: pokemon.id,
        });
      }

      await setPokemons(pokemonsArray);
      await setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleNewGame() {
    await ConsultarAPI();
    await handleRightResponse();
    setAnswer("");
    setVisible(false);
    setEntry("");
    setHideInputs(false);
  }

  function reduceLifes() {
    setPlayerLifes(playerLifes - 1);
  }
  function increaseRounds() {
    setPlayerRounds(playerRounds + 1);
  }

  useEffect(() => {
    if (answer != "") {
      setVisible(true);

      if (answer === rightPokemon.name) {
        setHits(hits + 1);
        setPlayerRow(playerRow + 1);
        setEntry("hit");
      } else {
        reduceLifes();
        setMisses(misses + 1);
        setPlayerRow(0);
        setEntry("miss");
      }
      increaseRounds();
      // setLoading(true)
      setTimeout(() => {
        handleNewGame();
      }, 4000);
    }
  }, [answer]);

  useEffect(() => {
    setLoading(true);
    if (settings.level != 0) {
      handleNewGame();
      setPlaying(true);
      setPlayerLifes(settings.lifes);
    }
  }, [settings.level]);

  useEffect(() => {
    if ((playerLifes < 0 || playerRounds > settings.questions) && playing) {
      setPlaying(false);
      setGameFinish(true);
      return;
    }
  }, [playerLifes, playerRounds, playing]);

  useEffect(() => {
    handleRightResponse();
  }, [pokemons]);

  return (
    <PokeContext.Provider
      value={{
        handleLevelSelector,
        settings,
        ConsultarAPI,
        pokemons,
        setAnswer,
        answer,
        rightPokemon,
        visible,
        gameFinish,
        hits,
        misses,
        loading,
        entry,
        setHideInputs,
        hideInputs,
        playerLifes,
        playerRow,
        playAgain,
        playerRounds
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeProvider };

export default PokeContext;
