import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Layout from "./components/Layout";
import Results from "./components/Results";
import Rules from "./components/Rules";
import { targetWord, gameNumber } from "./gameSetup";
import { loadState, saveState } from "./storage";
import getLettersExhausted from "./utils/getLettersExhausted";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>(loadState(targetWord));

  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const isGameOver = guesses[guesses.length - 1] === targetWord;

  const handleBoardClick = () => {
    if (isGameOver) setIsResultsOpen(true);
  };

  const handleSubmit = (guess: string) => {
    if (guess.length !== 5)
      throw new Error("Can't submit guess. Should be 5 letters long");
    setGuesses((guesses) => {
      const newGuesses = [...guesses, guess];
      saveState(targetWord, newGuesses);
      return newGuesses;
    });
  };

  // After each submit
  useEffect(() => {
    setLettersExhausted(getLettersExhausted(targetWord, guesses));
    if (guesses.length === 6 || guesses[guesses.length - 1] === targetWord)
      setIsResultsOpen(true);
  }, [guesses]);

  return (
    <Layout>
      <Header onClick={() => setIsRulesOpen(true)} />
      <Board
        targetWord={targetWord}
        onSubmit={handleSubmit}
        guesses={guesses}
        onClick={handleBoardClick}
      />

      <Keyboard lettersDisabled={lettersExhausted} />

      <Card isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)}>
        <Rules />
      </Card>

      <Card isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)}>
        <Results targetWord={targetWord} gameNumber={gameNumber} />
      </Card>
    </Layout>
  );
}

export default App;
