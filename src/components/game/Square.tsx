import React from "react";
import classNames from "classnames";

export type Color = "green" | "yellow" | "gray" | "white";

type Props = {
  color?: Color;
  size?: "small" | "normal";
  letter?: string;
};

const colorClass = {
  green: "text-bright bg-green borger-green",
  yellow: "text-bright bg-yellow border-yellow",
  gray: "text-bright bg-gray border-gray",
  white: "text-dark border-gray",
};

const sizeClass = {
  small: "h-10 w-10 sm:h-12 sm:w-12",
  normal: "h-12 w-12 sm:h-14 sm:w-14",
};

const styles = [
  "flex",
  "items-center",
  "justify-center",
  "text-2xl",
  "sm:text-4xl",
  "uppercase",
  "select-none",
  "duration-300",
  "border-2",
  "shadow-md",
];

export default function Square({
  color = "white",
  letter,
  size = "normal",
}: Props) {
  return (
    <div className={classNames(styles, sizeClass[size], colorClass[color])}>
      {letter}
    </div>
  );
}
