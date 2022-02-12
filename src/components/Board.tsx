import React, { useEffect, useState } from "react";
import Row from "./Row";
import arrayPadEnd from "../utils/arrayPadEnd";

type Props = {
  targetWord: string;
  onSubmit: (guess: string) => void;
  guesses: string[];
  gameIsOver: boolean;
  onActiveWordFull: () => void;
  onActiveWordNotFull: () => void;
  onActiveWordCorrect: () => void;
};

export default function Board({
  targetWord,
  onSubmit,
  guesses,
  gameIsOver,
  onActiveWordFull,
  onActiveWordNotFull,
  onActiveWordCorrect,
}: Props) {
  const rows = arrayPadEnd(guesses, undefined, 6);
  const activeRowIndex = guesses.length;

  const [freeHeight, setFreeHeight] = useState(
    Math.trunc(window.innerHeight - 272)
  );
  // Header and keyboard take up 250 px

  useEffect(() => {
    const handleResize = () => {
      console.log("handlin");
      setFreeHeight(Math.trunc(window.innerHeight - 272));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let boardHeight = freeHeight;
  boardHeight = boardHeight < 360 ? boardHeight : 360;
  const boardWidth = Math.trunc(boardHeight * 0.83);
  const squareSize = Math.trunc(boardHeight / 6.5);

  return (
    <div
      className="grid grid-cols-5 gap-1"
      style={{ width: boardWidth, height: boardHeight }}
    >
      {rows.map((_, index) => (
        <Row
          squareSize={squareSize}
          onSubmit={onSubmit}
          targetWord={targetWord}
          guess={guesses[index]}
          key={index}
          isActive={!gameIsOver && index === activeRowIndex}
          onActiveWordFull={onActiveWordFull}
          onActiveWordNotFull={onActiveWordNotFull}
          onActiveWordCorrect={onActiveWordCorrect}
        />
      ))}
    </div>
  );
}
