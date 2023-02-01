import { useState, createContext, useEffect } from "react";
import { GAMEMODES } from "../constants";
import axios from "axios";
import { getRandomInt, pickRandomPokemon } from "../helpers";

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [settings, setSettings] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rightPokemon, setRightPokemon] = useState("");
  const [answer, setAnswer] = useState("");

  const handleLevelSelector = (e) => {
    const selectedSetting = GAMEMODES.find(
      (setting) => setting.level === e.target.value
    );
    setSettings(selectedSetting);
  };
  
  const handleRightResponse = async () => {
    if (pokemons.length) {
      let respuesta = await pickRandomPokemon(pokemons);
      setRightPokemon(respuesta);
    }
  };

  const ConsultarAPI = async () => {
    setLoading(true);
    try {
      const baseURL = import.meta.env.VITE_API_URL;
      const urls = Array.from(
        { length: 4 },
        () => `${baseURL}/${getRandomInt()}`
      );

      const promises = urls.map((url) =>
        axios.get(url).then((res) => res.data)
      );
      const pokemons = await Promise.all(promises);
      const pokemonsArray = pokemons.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
      }));

      await setPokemons(pokemonsArray);
      await setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleNewGame() {
    await ConsultarAPI();
    await handleRightResponse()
    await setAnswer("");
  }
  
  useEffect(() => {
    if (answer !== "" ) {
      handleNewGame();
    }
  }, [answer ]);

   useEffect(() => {
    if( settings.level){
        handleNewGame()
    }
  }, [settings.level])

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
        rightPokemon
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeProvider };

export default PokeContext;
