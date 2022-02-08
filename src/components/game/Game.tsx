import React, { useState } from "react";
import RowActive from "./RowActive";
import RowCompleted from "./RowCompleted";

export default function Game() {
  const [rows, setRows] = useState<string[]>([]);

  const handleSubmit = (word: string) => {
    if (word.length !== 5)
      throw new Error("Can't submit word. Should be 5 letters long");
    setRows((rows) => [...rows, word]);
  };

  return (
    <div>
      {rows.map((row) => (
        <RowCompleted word={row} targetWord="namas" key={row} />
      ))}
      <RowActive handleSubmit={handleSubmit} />
    </div>
  );
}
