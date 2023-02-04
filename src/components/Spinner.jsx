import pokeball from "/img/pokeball.png";

export default function Spinner() {
  return (
    <div className="h-full flex justify-center">
      <div className="flex justify-center items-center flex-col">
        <img
          src={pokeball}
          alt="Pokeball Cargando"
          className="animate-spin h-16 w-16 brightness-50 "
        />
        <p className="font-start mt-2">Cargando...</p>
      </div>
    </div>
  );
}
