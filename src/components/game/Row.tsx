import React from "react";
import arrayPadEnd from "../../utils/arrayPadEnd";
import compareWords, { FullWordArray } from "./compareWords";
import Square, { Color } from "./Square";

type Props = {
  word: string[] | FullWordArray;
  targetWord: string;
  submitted: boolean;
};
export default function Row({ word, targetWord, submitted = false }: Props) {

  let squareColors;
  if(word.length === 5){
    squareColors = compareWords(word, targetWord)
  }

  const squareColors: Color[] = submitted 
    ? 
    : Array(5).fill("white", 0);

  return (
    <div>
      {results.map((color, index) => (
        <Square color={color} letter={word[index]} />
      ))}
    </div>
  );
}
