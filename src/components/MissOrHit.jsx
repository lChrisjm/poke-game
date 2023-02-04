import usePoke from "../../hooks/usePoke";

export default function MissOrHit() {
  const { entry, rightPokemon } = usePoke();

  const resultClass = entry === "hit" ? "bg-green-300" : "bg-red-300";

  return (
    <div
      className={`text-center text-gray-800 transition duration-300 ease-in-out  w-full md:w-1/5 ${
        entry == "" ? "invisible" : "visible"
      }`}
    >
      <div
        className={`mt-3 ${resultClass} py-3 rounded-lg ring-4 ring-black mx-4`}
      >
        <p className="font-play text-2xl">
          {entry === "hit" ? "Acertaste!" : "Fallaste!"} Este Pokemón es:
        </p>
        <span className="font-start text-2xl text-black">
          {entry != "" && rightPokemon.name}
        </span>
      </div>
    </div>
  );
}
