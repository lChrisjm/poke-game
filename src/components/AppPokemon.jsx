import usePoke from "../../hooks/usePoke";
import PlayGround from "./PlayGround";
import LevelSelector from "./LevelSelector";

function AppPokemon() {
  const { settings } = usePoke();

  return (
    <>
      {Object.values(settings).includes('') ? <LevelSelector /> : <PlayGround />}
    </>
  );
}
export default AppPokemon;
