import React, { useState } from "react";
import Row from "./Row";
import { loadState, saveState } from "../storage";
import { useEffect } from "react";
import arrayPadEnd from "../utils/arrayPadEnd";

type Props = {
  onGameEnd: (state: string[]) => void;
  onLettersExhausted: React.Dispatch<React.SetStateAction<string[]>>;
  targetWord: string;
  onClick: () => void;
};

export default function Board({
  targetWord,
  onGameEnd,
  onLettersExhausted,
  onClick,
}: Props) {
  const [guesses, setRows] = useState<string[]>(loadState(targetWord));
  const rows = arrayPadEnd(guesses, undefined, 6);
  const activeRowIndex = guesses.length;
  const isGameOver = guesses[guesses.length - 1] === targetWord;

  const handleSubmit = (guess: string) => {
    if (guess.length !== 5)
      throw new Error("Can't submit guess. Should be 5 letters long");
    setRows((guesses) => {
      const newGuesses = [...guesses, guess];
      saveState(targetWord, newGuesses);
      return newGuesses;
    });
  };

  // After each submit
  useEffect(() => {
    // Hide exhausted letters
    onLettersExhausted(getLettersExhausted(targetWord, guesses));
    // End game
    if (guesses.length === 6 || guesses[guesses.length - 1] === targetWord)
      onGameEnd(guesses);
  }, [guesses, targetWord, onLettersExhausted, onGameEnd]);

  return (
    <div className="grid grid-cols-5 gap-1 my-2" onClick={onClick}>
      {rows.map((_, index) => (
        <Row
          onSubmit={handleSubmit}
          targetWord={targetWord}
          guess={guesses[index]}
          key={index}
          isActive={!isGameOver && index === activeRowIndex}
        />
      ))}
    </div>
  );
}

function getLettersExhausted(targetWord: string, state: string[]): string[] {
  return [...state.join("")].filter((letter) => !targetWord.includes(letter));
}
