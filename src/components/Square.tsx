import React from "react";
import classNames from "classnames";

export type Color = "green" | "yellow" | "gray" | "white";

type Props = {
  color?: Color;
  small?: boolean;
  letter?: string;
  active?: boolean;
  size: number;
};

const colorClass = {
  green: "bg-green text-bright border-green",
  yellow: "bg-yellow text-bright border-yellow",
  gray: "bg-gray text-bright border-gray",
  white: "bg-white text-dark border-gray",
};

const style = [
  "flex",
  "items-center",
  "justify-center",
  "uppercase",
  "select-none",
  "border-2",
  "shadow-md",
  "overflow-hidden"
];

export default function Square({
  color = "white",
  letter,
  active = false,
  size,
}: Props) {
  return (
    <div
      className={classNames(
        style,
        colorClass[color],
        active ? "border-dark" : ""
      )}
      style={{ transition: "background-color 0.5s ease", width: size, height: size, fontSize: Math.trunc(size*0.8)  }}
    >
      {letter}
    </div>
  );
}
