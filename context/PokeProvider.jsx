import { useState, createContext, useEffect } from "react";
import { GAMEMODES } from "../constants";
import axios from "axios";
import { getRandomInt, pickRandomPokemon } from "../helpers";

const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    id: 0,
    level: "",
    lifes: 0,
    questions: 200,
  });
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rightPokemon, setRightPokemon] = useState("");
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(false);

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
    await handleRightResponse();
    setAnswer("");
    setVisible(false);
  }

  function reduceLifes() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      lifes: prevSettings.lifes - 1,
    }));
  }

  useEffect(() => {
    if (answer !== "") {
      setVisible(true);
      //   setTimeout(() => {
      //     handleNewGame();
      //   }, 3000);
      if (answer === rightPokemon.name) {
        console.log("Has acertado");
      } else {
        console.error("Has fallado");
        reduceLifes();
      }
    }
  }, [answer]);

  useEffect(() => {
    if (settings.level) {
      handleNewGame();
    }
  }, [settings.level]);

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
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeProvider };

export default PokeContext;
