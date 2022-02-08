import React, { useEffect, useState } from "react";
import config from "../config";
import compareWords from "../utils/compareWords";
import Square, { Color } from "./Square";

type Props = {
  onSubmit?: (activeWord: string) => void;
  guess?: string;
  targetWord: string;
  isActive?: boolean;
};
export default function Row({
  onSubmit,
  guess,
  targetWord,
  isActive = false,
}: Props) {
  const [activeWord, setActiveWord] = useState("");

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
        setActiveWord("");
      }

      if (key === "delete" || key === "backspace") {
        if (activeWord.length > 0)
          setActiveWord((activeWord) => activeWord.slice(0, -1));
      }

      if (config.lettersAllowed.includes(key)) {
        if (activeWord.length < 5)
          setActiveWord((activeWord) => (activeWord += key));
      }
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

  return (
    <>
      {colors.map((color, index) => (
        <Square
          color={color}
          letter={word?.[index]}
          key={index}
          active={isActive && !!activeWord[index]}
        />
      ))}
    </>
  );
}
