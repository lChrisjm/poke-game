import usePoke from "../../hooks/usePoke";

export default function PokeImg() {
  return (
    <img
      src={
        id
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg"
      }
      alt="Pokemon"
    />
  );
}
