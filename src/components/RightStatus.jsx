import { AiFillHeart } from "react-icons/ai";
import usePoke from "../../hooks/usePoke";
import { useEffect, useState } from "react";

export default function RightStatus() {
  const { playerLifes, hits } = usePoke();


  return (
    <div className=" px-1 flex flex-col text-center">
      <div >
        <p className="font-changa text-xl leading-none">Aciertos:</p>
        <span className="font-play text-lg ">{hits}</span>
      </div>
      <div className="mt-4">
        <p className="font-changa text-xl leading-none">Vidas</p>
        <span className="font-play text-lg ">{playerLifes}</span>
      </div>
    </div>
  );
}
