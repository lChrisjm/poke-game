import usePoke from "../../hooks/usePoke";
import PlayGround from "./PlayGround";
import LevelSelector from "./LevelSelector";

function AppPokemon() {
  const { settings } = usePoke();

  return (
    <>
      {Object.keys(settings).length > 0 ? <PlayGround /> : <LevelSelector />}
    </>
  );
}
export default AppPokemon;
