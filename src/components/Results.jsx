import usePoke from "../../hooks/usePoke";

function Results() {
  const { hits, misses, playAgain, playerRow, settings } = usePoke();
  return (
    <div className="text-center py-4 flex flex-col justify-center align-middle items-center">
      <h1 className="text-3xl font-start font-bold md:text-6xl md:mt-8">Game Over!</h1>
      {playerRow == settings.questions ? (
        <p className="text-xl md:text-4xl font-bold text-green-500">
          Eres todo un Maestro Pókemon!
        </p>
      ) : playerRow >= settings.questions / 2 ? (
        <p className="text-xl md:text-4xl font-bold text-yellow-500">No lo hiciste mal</p>
      ) : (
        <p className="text-xl md:text-4xl font-bold text-red-500">Suerte a la próxima</p>
      )}
      <div className="bg-gray-200 rounded-lg shadow p-4 md:w-auto md:p-12  w-3/4 my-4 mt-20">
        <p className="text-lg md:text-2xl font-medium">Tuviste {hits} Aciertos</p>
        <p className="text-lg md:text-2xl font-medium">Tuviste {misses} Fallos</p>
        <p className="text-lg md:text-2xl font-medium">
          Terminaste con una racha de: {misses}{" "}
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-play mt-10 py-3 px-4 w-3/4 uppercase font-semibold text-2xl md:w-auto md:text-4xl md:px-10 md:py-6  rounded"
        onClick={playAgain}
      >
        Volver a Jugar
      </button>
    </div>
  );
}
export default Results;
