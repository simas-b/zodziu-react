import React from "react";
import Square, { Color } from "./Square";

type Props = {
  word?: string;
  colors?: Color[];
  active?: boolean;
};

export default function Row({
  word,
  colors = ["white", "white", "white", "white", "white"],
  active = false,
}: Props) {
  return (
    <>
      {colors.map((color, index) => (
        <Square
          color={color}
          letter={word?.[index]}
          key={index}
          active={active && !!word?.[index]}
        />
      ))}
    </>
  );
}
