import usePoke from "../../hooks/usePoke";
import PlayGround from "./PlayGround";
import LevelSelector from "./LevelSelector";
import Results from "./Results";

function AppPokemon() {
  const { settings, gameFinish } = usePoke();

  return (
    <main className="grow">
      {gameFinish ? (
        <Results />
      ) : Object.values(settings).includes(0) ? (
        <LevelSelector />
      ) : (
        <PlayGround />
      )}
    </main>
  );
}
export default AppPokemon;
