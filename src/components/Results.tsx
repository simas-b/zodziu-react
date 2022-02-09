import React, { useState } from "react";
import Logo from "./Logo";
import arrowIcon from "../assets/arrow.svg";
import Countdown from "./Countdown";
import SocialStatus from "./SocialStatus";
import Row from "./Row";
import crossIcon from "../assets/cross.svg";

type Props = {
  endGameState: string[];
  targetWord: string;
  gameNumber: number;
  onClose: () => void;
};

export default function Results({
  endGameState,
  targetWord,
  gameNumber,
  onClose,
}: Props) {
  const isWinner = endGameState[5] === targetWord;
  const [isResultCopied, setIsResultCopied] = useState<boolean>(false);

  const shareFunctionAvailable = typeof navigator.share === "function";

  // Reload on time up
  const handleTimeUp = () => {
    window.location.reload();
  };

  const handleResultClick = (socialText: string) => {
    if (shareFunctionAvailable) {
      navigator.share({ text: socialText }).catch((error) => {
        console.error("Error: could not share game results", error.message);
      });
      return;
    }

    // Simple navigator clipboard as fallback
    navigator.clipboard.writeText(socialText);
    setIsResultCopied(true);
    setTimeout(() => setIsResultCopied(false), 10000);
  };

  return (
    <>
      <div className="py-8 flex justify-between">
        <h2
          id="info-card-title"
          className="text-xl font-semibold tracking-widest"
        >
          <Logo />{" "}
          <span className="tracking-normal font-normal">
            №{gameNumber} {isWinner ? "pavarei!" : "nepaėjo."}
          </span>
        </h2>
        <div className="cursor-pointer select-none" onClick={onClose}>
          <img
            src={crossIcon}
            alt="close"
            style={{ width: "2rem", height: "2rem" }}
          />
        </div>
      </div>

      {/* ANSWER */}
      <div className="grid grid-cols-5 gap-1">
        <Row guess={targetWord} targetWord={targetWord} small />
      </div>

      {/* SOCIAL */}

      <div className="flex my-14 py-6 w-3/4 justify-center items-center border-yellow border-y-2">
        <div className="flex-1 flex justify-center items-center">
          <SocialStatus
            onClick={handleResultClick}
            targetWord={targetWord}
            endGameState={endGameState}
            gameNumber={gameNumber}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start pl-4">
          <p id="share-text">
            {isResultCopied ? "Nukopijuota!" : "Dalinkis rezultatu"}
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

      {/* COUNTDOWN */}

      <div className="flex flex-col items-center mt-2 mb-8 select-none">
        <p className="uppercase text-sm tracking-wider">Kitas žodis už</p>
        <div className="flex py-2">
          <Countdown onTimeUp={handleTimeUp} />
        </div>
      </div>
    </>
  );
}
