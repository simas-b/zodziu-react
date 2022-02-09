import React, { useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Keyboard from "./components/Keyboard";
import Layout from "./components/Layout";
import Rules from "./components/Rules";
import { targetWord } from "./gameSetup";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const [endGameState, setEndGameState] = useState<string[] | undefined>();
  const [isRulesOpen, setIsRulesOpen] = useState(true);

  if (endGameState) console.log("sveikinu", endGameState);

  return (
    <Layout>
      <Board
        targetWord={targetWord}
        onGameEnd={setEndGameState}
        onLettersExhausted={setLettersExhausted}
      />
      <Keyboard lettersDisabled={lettersExhausted} />
      <Card isOpen={isRulesOpen}>
        <Rules onClose={() => setIsRulesOpen(false)} />
      </Card>
    </Layout>
  );
}

export default App;
