import usePoke from "../../hooks/usePoke";

export default function PokeImg() {
  const { rightPokemon, visible } = usePoke();
  const { id } = rightPokemon;

  return (
    <div className="flex text-center grow justify-center bg-gray-300 py-3 px-3 rounded-lg mx-2 md:grow-0 md:px-20 md:py-10">
      <img
        className={`w-full max-h-44 ${
          visible ? "brightness-1" : "brightness-0"
        }`}
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
