import { useState } from "react";
import usePoke from "../../hooks/usePoke";
import PokeImg from "./PokeImg";

function PlayGround() {
  const { settings, pokemons, answer, setAnswer, rightPokemon } = usePoke();
    const {id} = rightPokemon
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>{`Vamos a Juegar ${settings.level}`} </h1>
      {/* <PokeImg visible={visible}  /> */}
      <img
        src={
          id
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
            : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg"
        }
        alt="Pokemon"
      />

      <section className="flex flex-col my-8 justify-center items-center">
        {pokemons?.map((opcion) => (
          <input
            key={opcion.id}
            type="button"
            value={opcion.name}
            className="my-2 text-white bg-orange-600 w-4/5 py-4 text-xl uppercase cursor-pointer rounded-md"
            onClick={(e) => {
              setAnswer(e.target.value);
            }}
          />
        ))}
      </section>
    </div>
  );
}
export default PlayGround;
