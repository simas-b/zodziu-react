import React, { useState } from "react";
import Logo from "./Logo";
import { gameNumber } from "../gameSetup";
import arrowIcon from "../assets/arrow.svg";
import Countdown from "./Countdown";
import SocialStatus from "./SocialStatus";

type Props = {
  endGameState: string[];
  targetWord: string;
  onClose: ()=>void;
};

export default function Results({ endGameState, targetWord, onClose }: Props) {
  const isWinner = endGameState[5] === targetWord;
  const [isIconsCopied, setIconsCopied] = useState<boolean>(false);

  const handleTimeUp = () => {
    console.log("time is up");
  };

  const handleIconsCopied = () => {
    setIconsCopied(true);
    setTimeout(() => setIconsCopied(false), 10000);
  };

  return (
    <>
      <h2
        id="info-card-title"
        className="py-8 text-xl font-semibold tracking-widest"
      >
        <Logo /> №{gameNumber}
        <span className="tracking-normal font-normal">
          {isWinner ? "pavarei!" : "nepaėjo."}
        </span>
      </h2>

      <div className="flex my-14 py-6 w-3/4 justify-center items-center border-yellow border-y-2">
        <div className="flex-1 flex justify-center items-center">
          <SocialStatus
            onCopied={handleIconsCopied}
            targetWord={targetWord}
            endGameState={endGameState}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start pl-4">
          <p id="share-text">
            {isIconsCopied ? "Nukopijuota!" : "Dalinkis rezultatu"}
          </p>
          <p className="py-1"></p>
          <img
            src={arrowIcon}
            alt=""
            width="40"
            height="40"
            className="select-none"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-2 mb-8 select-none">
        <p className="uppercase text-sm tracking-wider">Kitas žodis už</p>
        <div className="flex py-2">
          <Countdown onTimeUp={handleTimeUp} />
        </div>
      </div>
    </>
  );
}
