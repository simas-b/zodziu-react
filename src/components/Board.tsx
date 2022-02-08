import React, { useState } from "react";
import RowActive from "./RowActive";
import RowCompleted from "./RowCompleted";

export default function Board() {
  const [rows, setRows] = useState<string[]>([]);

  const handleSubmit = (word: string) => {
    if (word.length !== 5)
      throw new Error("Can't submit word. Should be 5 letters long");
    setRows((rows) => [...rows, word]);
  };

  return (
    <div className="grid grid-cols-5 gap-1 my-2">
      {rows.map((row, index) => (
        <RowCompleted word={row} targetWord="namas" key={index} />
      ))}
      <RowActive handleSubmit={handleSubmit} />
    </div>
  );
}
