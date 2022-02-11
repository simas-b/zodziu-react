import React from "react";
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

  return (
    <div className="grid grid-cols-5 gap-1 my-2">
      {rows.map((_, index) => (
        <Row
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
