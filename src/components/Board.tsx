import React, { useState } from "react";
import Row from "./Row";
import RowActive from "./RowActive";
import RowCompleted from "./RowCompleted";

export default function Board() {
  const [rows, setRows] = useState<string[]>([]);
  const isGameOver = rows.length === 6;
  const emptyRows = !isGameOver && [...Array(5 - rows.length)];

  const handleSubmit = (word: string) => {
    if (word.length !== 5)
      throw new Error("Can't submit word. Should be 5 letters long");
    setRows((rows) => [...rows, word]);
  };

  return (
    <div className="grid grid-cols-5 gap-1 my-2">
      {/* ROWS COMPLETED */}
      {rows.map((row, index) => (
        <RowCompleted word={row} targetWord="namas" key={index} />
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
