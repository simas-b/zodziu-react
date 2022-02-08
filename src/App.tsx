import React, { useState } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import targetWord from "./targetWord";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const handleGameEnd = (state: string[]) => {
    console.log("sveikinu", state);
  };

  return (
    <div className="flex flex-col items-center">
      <Board
        targetWord={targetWord}
        onGameEnd={handleGameEnd}
        onLettersExhausted={setLettersExhausted}
      />
      <Keyboard lettersDisabled={lettersExhausted} />
    </div>
  );
}

export default App;
