import { AiFillHeart } from "react-icons/ai";
import usePoke from "../../hooks/usePoke";
import { useEffect, useState } from "react";

export default function RightStatus() {
  const { playerLifes, hits } = usePoke();


  return (
    <div className="w-20 flex flex-col text-center">
      <div className="">
        <p className="font-changa text-xl leading-none">Aciertos:</p>
        <span className="font-play text-lg ">{hits}</span>
      </div>
      <div>
        <p className="font-changa text-xl leading-none">Vidas</p>
        <span className="font-play text-lg ">{playerLifes}</span>
      </div>
    </div>
  );
}
