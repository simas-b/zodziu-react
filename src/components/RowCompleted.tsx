import React from "react";
import compareWords from "../utils/compareWords";
import Row from "./Row";

type Props = {
  targetWord: string;
  guess: string;
};

export default function RowCompleted({ guess, targetWord }: Props) {
  const colors = compareWords(guess, targetWord);

  return <Row colors={colors} word={guess} />;
}
