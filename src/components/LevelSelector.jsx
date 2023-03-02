import { GAMEMODES } from "../../constants";
import usePoke from "../../hooks/usePoke";
import logoPoke from "/img/poke-logo.png";

function LevelSelector() {
  const { handleLevelSelector } = usePoke();
  return (
    <div className=" flex flex-col justify-center content-center text-center py-8  md:w-screen md:grow">
      <div className=" text-center">
        <img className="mx-auto w-3/4 md:w-2/5 md:h-auto lg:w-1/5 h-auto" src={logoPoke} alt="Pokelogo" />
      </div>
      <div className="py-4">
        <h1 className="font-play font-bold text-2xl md:text-3xl">
          ¿Quién es este Pókemon?
        </h1>
      </div>
      <section className="flex flex-col place-content-center mt-12">
        <p className="mb-2 font-bold font-teko text-3xl md:text-4xl">Selecciona la dificultad</p>

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
            } px-6 py-4 mx-auto my-2 lg:my-1 w-3/4 lg:w-1/3  font-play uppercase font-semibold text-2xl lg:text-1xl  rounded-md text-white  md:py-5 md:text-4xl`}
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
