import { useState, useEffect } from "react";
import usePoke from "../../hooks/usePoke";
import PokeImg from "./PokeImg";
import Spinner from "./Spinner";
import MissOrHit from "./MissOrHit";
import Countdown from "./Countdown";
import LeftStatus from "./LeftStatus";
import RightStatus from "./RightStatus";
import GameHeader from "./GameHeader";

function PlayGround() {
  const {
    settings,
    pokemons,
    setAnswer,
    loading,
    entry,
    hideInputs,
    setHideInputs,
  } = usePoke();
  const [visible, setVisible] = useState(false);
  const [showCountDown, setShowCountdown] = useState(false);

  useEffect(() => {
    if (entry != "") {
      setHideInputs(true);
      setShowCountdown(true);
      setTimeout(() => {
        setShowCountdown(false);
      }, 4000);
    }
  }, [entry]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="flex flex-col h-full">
          <GameHeader />
          <div className="flex flex-row container px-2">
            <LeftStatus />
            <PokeImg visible={visible} />
            <RightStatus />
          </div>
          <MissOrHit />
          <div className="flex flex-col mt-6 justify-center items-center justify-self-end">
            {pokemons?.map((opcion, index) => (
              <input
                key={opcion.id}
                type="button"
                disabled={hideInputs}
                value={opcion.name}
                className={`my-2 font-play text-2xl text-white bg-orange-600 w-4/5 py-4 uppercase cursor-pointer rounded-md form-input ${
                  hideInputs ? "bg-gray-300" : ""
                } ${index === 0 ? "mt-0" : "mt-2"}`}
                onClick={(e) => {
                  setAnswer(e.target.value);
                }}
              />
            ))}
          </div>
          {showCountDown && <Countdown key={Date.now()} />}
        </section>
      )}
    </>
  );
}
export default PlayGround;
