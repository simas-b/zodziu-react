import React from "react";
import classNames from "classnames";

export type Color = "green" | "yellow" | "gray" | "white";

type Props = {
  color?: Color;
  small?: boolean;
  letter?: string;
  active?: boolean;
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
  "duration-500",
  "border-2",
  "shadow-md",
];

export default function Square({
  color = "white",
  letter,
  small = false,
  active = false,
}: Props) {
  const sizeClass = small
    ? "h-8 w-8 sm:h-10 sm:w-10 text-xl sm:text-2xl"
    : "h-12 w-12 sm:h-14 sm:w-14 text-2xl sm:text-4xl";
  return (
    <div
      className={classNames(
        style,
        sizeClass,
        colorClass[color],
        active ? "border-dark" : ""
      )}
    >
      {letter}
    </div>
  );
}
