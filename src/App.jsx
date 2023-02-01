import { PokeProvider } from "../context/PokeProvider";
import AppPokemon from "./components/AppPokemon";

function App() {
  return (
      <PokeProvider>
        <AppPokemon/>
      </PokeProvider>
  );
}

export default App;
