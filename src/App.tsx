import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Layout from "./components/Layout";
import Results from "./components/Results";
import Rules from "./components/Rules";
import { targetWord, gameNumber } from "./gameSetup";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const [endGameState, setEndGameState] = useState<string[] | undefined>();
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const isGameOver = !!endGameState;
  const [cssLoaded, setCssLoaded] = useState(false);

  const handleBoardClick = () => {
    if (isGameOver) setIsResultsOpen(true);
  };

  useEffect(() => {
    if (endGameState) setIsResultsOpen(true);
  }, [endGameState]);

  useEffect(() => {
    setTimeout(() => {
      setCssLoaded(true);
    }, 10);
  }, []);

  if (!cssLoaded) return null;

  return (
    <Layout>
      <Header onClick={() => setIsRulesOpen(true)} />
      <Board
        targetWord={targetWord}
        onGameEnd={setEndGameState}
        onLettersExhausted={setLettersExhausted}
        onClick={handleBoardClick}
      />
      <Keyboard lettersDisabled={lettersExhausted} />

      <Card isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)}>
        <Rules />
      </Card>

      <Card isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)}>
        {endGameState && (
          <Results
            endGameState={endGameState}
            targetWord={targetWord}
            gameNumber={gameNumber}
          />
        )}
      </Card>
    </Layout>
  );
}

export default App;
