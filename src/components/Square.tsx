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
  "text-2xl",
  "sm:text-4xl",
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
    ? "h-10 w-10 sm:h-12 sm:w-12"
    : "h-12 w-12 sm:h-14 sm:w-14";
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
