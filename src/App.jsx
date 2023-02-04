import { PokeProvider } from "../context/PokeProvider";
import AppPokemon from "./components/AppPokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <PokeProvider>
      <Header/>
      <AppPokemon />
      <Footer/>
    </PokeProvider>
  );
}

export default App;
