import { GAMEMODES } from "../../constants";
import usePoke from "../../hooks/usePoke";
import logoPoke from "/img/poke-logo.png";

function LevelSelector() {
  const { handleLevelSelector } = usePoke();
  return (
    <div className=" flex flex-col justify-center content-center text-center py-8  md:w-screen md:grow">
      <div className=" text-center">
        <img className="mx-auto w-3/4 md:w-1/4 md:h-auto h-auto" src={logoPoke} alt="Pokelogo" />
      </div>
      <div className="py-4">
        <h1 className="font-play font-bold text-3xl md:text-5xl">
          ¿Quién es este Pókemon?
        </h1>
      </div>
      <section className="flex flex-col place-content-center mt-12">
        <p className="mb-2 font-bold font-teko text-3xl md:text-5xl">Selecciona la dificultad</p>

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
            } px-6 py-4 mx-auto my-2 w-3/4 font-play uppercase font-semibold text-2xl  rounded-md text-white md:w-1/3 md:py-6 md:text-5xl`}
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
