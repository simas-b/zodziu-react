import React, { SyntheticEvent, useEffect, useState } from "react";
import BadWordNotice from "./components/BadWordNotice";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Layout from "./components/Layout";
import MidnightNotice from "./components/MidnightNotice";
import Results from "./components/Results";
import Rules from "./components/Rules";
import { targetWord, gameNumber } from "./gameSetup";
import checkIsWordCorrect from "./matchList";
import { loadState, saveState, isFirstTime } from "./storage";
import {
  getLettersExhausted,
  getLettersGotGreen,
  getLettersGotRight,
} from "./utils/lettersFilter";

function App() {
  const [lettersExhausted, setLettersExhausted] = useState<string[]>([]);
  const [lettersGotRight, setLettersGotRight] = useState<string[]>([]);
  const [lettersGotGreen, setLettersGotGreen] = useState<string[]>([]);

  const [guesses, setGuesses] = useState<string[]>(loadState(targetWord));
  const [isWordFull, setIsWordFull] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(false);

  const [isRulesOpen, setIsRulesOpen] = useState(isFirstTime());
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isMidnightNoticeOpen, setIsMidnightNoticeOpen] = useState(false);
  const [isBadWordNoticeOpen, setIsBadWordNoticeOpen] = useState(false);

  let gameIsOver =
    guesses.length === 6 || guesses[guesses.length - 1] === targetWord;

  // HANDLE SUBMIT

  const handleSubmit = (guess: string) => {
    if (guess.length !== 5)
      throw new Error("Can't submit guess. Should be 5 letters long");

    if (!checkIsWordCorrect(guess)) {
      setIsBadWordNoticeOpen(true);
      return;
    }

    setGuesses((guesses) => {
      const newGuesses = [...guesses, guess];
      saveState(targetWord, newGuesses);
      return newGuesses;
    });
  };

  // HANDLE TIME UP

  const handleTimeUp = () => {
    if (isResultsOpen) {
      window.location.reload();
      return;
    }

    setIsRulesOpen(false);
    setIsMidnightNoticeOpen(true);
    setTimeout(() => window.location.reload(), 10000);
  };

  // REMOVE EXHAUSTED LETTERS

  useEffect(() => {
    setLettersExhausted(getLettersExhausted(targetWord, guesses));
    setLettersGotRight(getLettersGotRight(targetWord, guesses));
    setLettersGotGreen(getLettersGotGreen(targetWord, guesses));
  }, [guesses]);

  // OPEN RESULTS ON GAME OVER

  useEffect(() => {
    if (gameIsOver && !isMidnightNoticeOpen) {
      // Open results after 2 seconds so user has time to see last guess evaluation
      setTimeout(() => setIsResultsOpen(true), 2000);
    }
  }, [guesses, gameIsOver, isMidnightNoticeOpen]);

  return (
    <Layout>
      <Header
        isClockVisible={gameIsOver}
        onClockClick={() => gameIsOver && setIsResultsOpen(true)}
        onQuestionClick={() => setIsRulesOpen(true)}
      />
      <Board
        targetWord={targetWord}
        onSubmit={handleSubmit}
        guesses={guesses}
        gameIsOver={gameIsOver}
        onActiveWordFull={() => setIsWordFull(true)}
        onActiveWordNotFull={() => {
          setIsWordFull(false);
          setIsWordCorrect(false);
        }}
        onActiveWordCorrect={() => setIsWordCorrect(true)}
      />

      <Keyboard
        lettersGotGreen={lettersGotGreen}
        lettersGotRight={lettersGotRight}
        lettersDisabled={lettersExhausted}
        isWordFull={isWordFull && !gameIsOver}
        isWordCorrect={isWordFull && !gameIsOver && isWordCorrect}
      />

      <Card isOpen={isRulesOpen} onClose={()=>setIsRulesOpen(false)}>
        <Rules onClose={() => setIsRulesOpen(false)} />
      </Card>

      <Card isOpen={isResultsOpen} onClose={(e:SyntheticEvent | undefined)=>{
        console.log(e);
        setIsResultsOpen(false)
      }}>
        <Results
          targetWord={targetWord}
          gameNumber={gameNumber}
          onTimeUp={handleTimeUp}
        />
      </Card>

      <Card isOpen={isMidnightNoticeOpen}>
        {isMidnightNoticeOpen && <MidnightNotice />}
      </Card>

      <BadWordNotice
        isOpen={isBadWordNoticeOpen}
        onClose={() => setIsBadWordNoticeOpen(false)}
      />
    </Layout>
  );
}

export default App;
