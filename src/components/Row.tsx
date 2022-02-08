import React from "react";
import Square, { Color } from "./Square";

type Props = {
  word: string;
  colors?: Color[];
};

export default function Row({
  word,
  colors = ["white", "white", "white", "white", "white"],
}: Props) {
  return (
    <>
      {colors.map((color, index) => (
        <Square color={color} letter={word[index]} key={index} />
      ))}
    </>
  );
}
