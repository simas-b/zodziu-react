import React, { useState } from "react";
import Row from "./Row";
import { loadState, saveState } from "../storage";
import { useEffect } from "react";
import arrayPadEnd from "../utils/arrayPadEnd";

type Props = {
  onGameEnd: (state: string[]) => void;
  onLettersExhausted: React.Dispatch<React.SetStateAction<string[]>>;
  targetWord: string;
};

export default function Board({
  targetWord,
  onGameEnd,
  onLettersExhausted,
}: Props) {
  const [guesses, setRows] = useState<string[]>(loadState(targetWord));
  const rows = arrayPadEnd(guesses, undefined, 6);
  const activeRowIndex = guesses.length;

  const handleSubmit = (guess: string) => {
    if (guess.length !== 5)
      throw new Error("Can't submit guess. Should be 5 letters long");
    setRows((guesses) => [...guesses, guess]);
  };

  useEffect(() => {
    saveState(targetWord, guesses);

    onLettersExhausted(getLettersExhausted(targetWord, guesses));

    if (guesses.length === 6) onGameEnd(guesses);
  }, [guesses, targetWord, onLettersExhausted, onGameEnd]);

  return (
    <div className="grid grid-cols-5 gap-1 my-2">
      {rows.map((_, index) => (
        <Row
          onSubmit={handleSubmit}
          targetWord={targetWord}
          guess={guesses[index]}
          key={index}
          isActive={index === activeRowIndex}
        />
      ))}
    </div>
  );
}

function getLettersExhausted(targetWord: string, state: string[]): string[] {
  return [...state.join("")].filter((letter) => !targetWord.includes(letter));
}
