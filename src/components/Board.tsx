import React, { useState } from "react";
import Row from "./Row";
import RowActive from "./RowActive";
import RowCompleted from "./RowCompleted";
import { loadState } from "../storage";
import { useEffect } from "react";

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
  const [rows, setRows] = useState<string[]>(loadState(targetWord));
  const isGameOver = rows.length === 6;
  const emptyRows = !isGameOver && [...Array(5 - rows.length)];

  const handleSubmit = (word: string) => {
    if (word.length !== 5)
      throw new Error("Can't submit word. Should be 5 letters long");
    setRows((rows) => [...rows, word]);
  };

  // After each row submitted:
  // Save game
  // Update exhausted letters
  useEffect(() => {
    // saveState(word, rows);
    onLettersExhausted(getLettersExhausted(targetWord, rows));
  }, [rows, targetWord, onLettersExhausted]);

  if (isGameOver) onGameEnd(rows);

  return (
    <div className="grid grid-cols-5 gap-1 my-2">
      {/* ROWS COMPLETED */}
      {rows.map((guess, index) => (
        <RowCompleted guess={guess} targetWord={targetWord} key={index} />
      ))}

      {/* ACTIVE ROW */}
      {!isGameOver && (
        <>
          <RowActive handleSubmit={handleSubmit} />
        </>
      )}

      {/* EMPTY FILLER ROWS */}
      {emptyRows && emptyRows.map((row, index) => <Row key={index} />)}
    </div>
  );
}

function getLettersExhausted(targetWord: string, state: string[]): string[] {
  return [...state.join("")].filter((letter) => !targetWord.includes(letter));
}
