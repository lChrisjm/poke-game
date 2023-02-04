import usePoke from "../../hooks/usePoke";

function Results() {
  const { hits, misses, playAgain, playerRow, settings } = usePoke();
  return (
    <div className="text-center py-4 flex flex-col justify-center align-middle items-center">
      <h1 className="text-3xl font-start font-bold">Game Over!</h1>
      {playerRow == settings.questions ? (
        <p className="text-xl font-bold text-green-500">
          Eres todo un Maestro Pókemon!
        </p>
      ) : playerRow >= settings.questions / 2 ? (
        <p className="text-xl font-bold text-yellow-500">No lo hiciste mal</p>
      ) : (
        <p className="text-xl font-bold text-red-500">Suerte a la próxima</p>
      )}
      <div className="bg-gray-200 rounded-lg shadow p-4  w-3/4 my-4 mt-20">
        <p className="text-lg font-medium">Tuviste {hits} Aciertos</p>
        <p className="text-lg font-medium">Tuviste {misses} Fallos</p>
        <p className="text-lg font-medium">
          Terminaste con una racha de: {misses}{" "}
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-play mt-10 py-3 px-4 w-3/4 uppercase font-semibold text-2xl  rounded"
        onClick={playAgain}
      >
        Volver a Jugar
      </button>
    </div>
  );
}
export default Results;
