import React from "react";
import Row from "./Row";
import arrayPadEnd from "../utils/arrayPadEnd";

type Props = {
  targetWord: string;
  onClick: () => void;
  onSubmit: (guess: string) => void;
  guesses: string[];
};

export default function Board({
  targetWord,
  onClick,
  onSubmit,
  guesses,
}: Props) {
  const rows = arrayPadEnd(guesses, undefined, 6);
  const activeRowIndex = guesses.length;
  const isGameOver = guesses[guesses.length - 1] === targetWord;

  return (
    <div className="grid grid-cols-5 gap-1 my-2" onClick={onClick}>
      {rows.map((_, index) => (
        <Row
          onSubmit={onSubmit}
          targetWord={targetWord}
          guess={guesses[index]}
          key={index}
          isActive={!isGameOver && index === activeRowIndex}
        />
      ))}
    </div>
  );
}
