import { GAMEMODES } from "../../constants";
import usePoke from "../../hooks/usePoke";

function LevelSelector() {
    
   const { handleLevelSelector } = usePoke();
  return (
    <div className="container text-center py-8 w-screen">
      <div className="container py-4">
        <h1>Veamos que tanto sabes acerca de Pokemon...</h1>
        <p>Selecciona la dificultad del desafío</p>
      </div>
      <section className="flex flex-col place-content-center py-6">
        {GAMEMODES.map((mode) => (
          <button
            key={mode.id}
            value={mode.level}
            className={`${
              mode.id == 1
                ? "bg-cyan-400"
                : mode.id == 2
                ? "bg-yellow-500"
                : "bg-red-500"
            } px-6 py-2 mx-auto my-2 w-1/2 uppercase font-semibold text-lg  rounded-md text-white `}
            onClick={(e) => handleLevelSelector(e)}
          >
            {mode.level}
          </button>
        ))}
      </section>
    </div>
  );
}
export default LevelSelector;
