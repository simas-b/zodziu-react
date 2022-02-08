import React, { useEffect, useState } from "react";
import config from "../../config";
import Row from "./Row";

type Props = {
  handleSubmit: (word: string) => void;
};
export default function RowActive({ handleSubmit }: Props) {
  const [word, setWord] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      const key = e.key.toLowerCase();

      if (key === "enter") {
        if (word.length !== 5) return;
        handleSubmit(word);
        setWord("");
      }

      if (key === "delete" || key === "backspace") {
        setWord((word) => (word.length > 0 ? word.slice(0, -1) : ""));
      }

      if (!config.lettersAllowed.includes(key)) return;
      setWord((word) => (word += key));
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [word, handleSubmit]);

  return <Row word={word} />;
}
