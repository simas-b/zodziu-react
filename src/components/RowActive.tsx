import React, { useEffect, useState } from "react";
import config from "../config";
import Row from "./Row";

type Props = {
  handleSubmit: (word: string) => void;
};
export default function RowActive({ handleSubmit }: Props) {
  const [word, setWord] = useState("");

  useEffect(() => {
    const handleKeyPress = (key: string): void => {
      if (key === "enter") {
        if (word.length !== 5) return;
        handleSubmit(word);
        setWord("");
      }

      if (key === "delete" || key === "backspace") {
        if (word.length > 0) setWord((word) => word.slice(0, -1));
      }

      if (config.lettersAllowed.includes(key)) {
        if (word.length < 5) setWord((word) => (word += key));
      }
    };

    const handleKeyboard = (e: KeyboardEvent) => {
      handleKeyPress(e.key.toLowerCase());
    };
    const handleTouchpad = (e: CustomEvent<string>) => {
      handleKeyPress(e.detail.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyboard);
    document.addEventListener("touchpad", handleTouchpad as EventListener);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.removeEventListener("touchpad", handleTouchpad as EventListener);
    };
  }, [word, handleSubmit]);

  return <Row word={word} />;
}
