import { GAMEMODES } from "../../constants";
import usePoke from "../../hooks/usePoke";
import logoPoke from "/img/poke-logo.png";

function LevelSelector() {
  const { handleLevelSelector } = usePoke();
  return (
    <div className="container text-center py-8 w-screen">
      <div className=" text-center">
        <img className="mx-auto w-3/4 h-auto" src={logoPoke} alt="Pokelogo" />
      </div>
      <div className="container py-4">
        <h1 className="font-play font-bold text-3xl">
          ¿Quién es este Pókemon?
        </h1>
      </div>
      <section className="flex flex-col place-content-center mt-12">
        <p className="mb-2 font-bold font-teko text-3xl">Selecciona la dificultad</p>

        {GAMEMODES.map((mode) => (
          <button
            key={mode.id}
            value={mode.id}
            className={`${
              mode.id == 1
                ? "bg-cyan-400"
                : mode.id == 2
                ? "bg-yellow-500"
                : "bg-red-500"
            } px-6 py-4 mx-auto my-2 w-3/4 font-play uppercase font-semibold text-2xl  rounded-md text-white `}
            onClick={(e) => handleLevelSelector(e.target.value)}
          >
            {mode.level}
          </button>
        ))}
      </section>
    </div>
  );
}
export default LevelSelector;
