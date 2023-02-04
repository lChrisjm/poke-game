import usePoke from "../../hooks/usePoke";

function GameHeader() {
  const { settings, playerRounds } = usePoke();
  return (
    <div className="text-center my-4">
      <p className="text-lg font-play">
        {playerRounds} / {settings.questions}
      </p>
      <h1 className="font-changa font-bold text-4xl">
        {`Desafío ${settings.level}`}
      </h1>

      <h2 className="font-teko font-medium text-2xl">
        ¿Quién es este Pokemon?
      </h2>
    </div>
  );
}
export default GameHeader;
