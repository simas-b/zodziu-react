import React, { useEffect, useState } from "react";
import config from "../config";
import compareWords from "../utils/compareWords";
import Square, { Color } from "./Square";
import isWordCorrect from "../matchList";

type Props = {
  onSubmit?: (activeWord: string) => void;
  guess?: string;
  targetWord: string;
  isActive?: boolean;
  small?: boolean;
  onActiveWordFull?: () => void;
  onActiveWordNotFull?: () => void;
  onActiveWordCorrect?: () => void;
  squareSize: number;
};
export default function Row({
  onSubmit,
  guess,
  targetWord,
  isActive = false,
  small = false,
  onActiveWordFull,
  onActiveWordNotFull,
  onActiveWordCorrect,
  squareSize,
}: Props) {
  const [activeWord, setActiveWord] = useState<string>("");

  const colors: Color[] = guess
    ? compareWords(guess, targetWord)
    : ["white", "white", "white", "white", "white"];

  const word = isActive ? activeWord : guess;

  // If this row is active, add event handlers for key presses
  useEffect(() => {
    const handleKeyPress = (key: string): void => {
      if (key === "enter") {
        if (activeWord.length !== 5) return;
        onSubmit && onSubmit(activeWord);
        // setActiveWord("");
      }

      if (key === "delete" || key === "backspace")
        setActiveWord((activeWord) =>
          activeWord.length > 0 ? activeWord.slice(0, -1) : ""
        );

      if (config.lettersAllowed.includes(key))
        setActiveWord((activeWord) =>
          activeWord.length < 5 ? (activeWord += key) : activeWord
        );
    };

    const handleKeyboard = (e: KeyboardEvent) => {
      handleKeyPress(e.key.toLowerCase());
    };
    const handleTouchpad = (e: CustomEvent<string>) => {
      handleKeyPress(e.detail.toLowerCase());
    };

    if (isActive) {
      window.addEventListener("keydown", handleKeyboard);
      document.addEventListener("touchpad", handleTouchpad as EventListener);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.removeEventListener("touchpad", handleTouchpad as EventListener);
    };
  }, [activeWord, isActive, onSubmit]);

  // Announce when word is full or not full to parent components
  useEffect(() => {
    if (
      !isActive ||
      !onActiveWordFull ||
      !onActiveWordNotFull ||
      !onActiveWordCorrect
    )
      return;

    if (activeWord.length === 5) {
      if (isWordCorrect(activeWord)) onActiveWordCorrect();
      onActiveWordFull();
    } else onActiveWordNotFull();
  }, [
    activeWord,
    isActive,
    onActiveWordFull,
    onActiveWordNotFull,
    onActiveWordCorrect,
  ]);

  return (
    <>
      {colors.map((color, index) => (
        <Square
          color={color}
          letter={word?.[index]}
          key={index}
          active={isActive && !!activeWord[index]}
          size={squareSize}
        />
      ))}
    </>
  );
}
