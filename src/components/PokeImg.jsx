import usePoke from "../../hooks/usePoke";

export default function PokeImg() {
    const {  rightPokemon, visible } = usePoke();
    const {id} = rightPokemon;

  return (
    <div className="flex container text-center grow justify-center bg-gray-300 py-3  px-3 rounded-lg mx-2">
      <img
      className={`mx-auto h-60 w-full ${visible ? 'brightness-1' : 'brightness-0'}`}
        src={
          id
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
            : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg"
        }
        alt="Pokemon"
      />
    </div>
  );
}
