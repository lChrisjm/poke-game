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
        <section className="flex flex-col h-full w-full items-center text-center">
          <GameHeader />
          <div className="flex w-full flex-row  md:justify-center ">
            <LeftStatus />
            <PokeImg visible={visible} />
            <RightStatus />
          </div>
          <MissOrHit />
          <div className="flex flex-col mt-6 w-full lg:grid lg:grid-cols-2 lg:w-1/2 px-10 md:px-8 md:w-1/5 items-center lg:gap-2 mb-4 ">
            {pokemons?.map((opcion, index) => (
              <input
                key={opcion.id}
                type="button"
                disabled={hideInputs}
                value={opcion.name}
                className={`my-2 font-play text-2xl  text-white bg-orange-600  w-full py-4 uppercase cursor-pointer px-4 min-w-[12em] rounded-md form-input lg:my-0 ${
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
