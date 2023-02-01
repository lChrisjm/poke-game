import usePoke from "../../hooks/usePoke";

export default function PokeImg() {
    const {  rightPokemon, visible } = usePoke();
    const {id} = rightPokemon;

  return (
    <div className="flex container text-center align-middle justify-center ">
      <img
      className={`mx-auto h-60 ${visible ? 'brightness-1' : 'brightness-0'}`}
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
