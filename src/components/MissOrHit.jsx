import usePoke from "../../hooks/usePoke";

export default function MissOrHit() {
  const { entry, rightPokemon } = usePoke();

  const resultClass = entry === "hit" ? "bg-green-300" : "bg-red-300";

  return (
    <div
      className={`text-center text-gray-800 transition duration-300 ease-in-out px-4   ${
        entry == "" ? "invisible" : "visible"
      }`}
    >
      <div
        className={`mt-3 ${resultClass} py-3 rounded-lg ring-4 px-2 ring-black mx-4 ext-xl`}
      >
        <p className="font-play">
          {entry === "hit" ? "Acertaste!" : "Fallaste!"} Este Pokemón es:
        </p>
        <span className="font-start text-black">
          {entry != "" && rightPokemon.name}
        </span>
      </div>
    </div>
  );
}
