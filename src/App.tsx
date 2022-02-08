import React, { useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Keyboard from "./components/Keyboard";
import Rules from "./components/Rules";
import targetWord from "./targetWord";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const [isRulesOpen, setIsRulesOpen] = useState(true);

  const handleGameEnd = (state: string[]) => {
    console.log("sveikinu", state);
  };

  return (
    <>
      <Card isOpen={isRulesOpen}>
        <Rules onClose={() => setIsRulesOpen(false)} />
      </Card>
      <div className="flex flex-col items-center">
        <Board
          targetWord={targetWord}
          onGameEnd={handleGameEnd}
          onLettersExhausted={setLettersExhausted}
        />
        <Keyboard lettersDisabled={lettersExhausted} />
      </div>
    </>
  );
}

export default App;
