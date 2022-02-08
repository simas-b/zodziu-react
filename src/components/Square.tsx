import React from "react";
import classNames from "classnames";

export type Color = "green" | "yellow" | "gray" | "white";

type Props = {
  color?: Color;
  size?: "small" | "normal";
  letter?: string;
  active?: boolean;
};

export default function Square({
  color = "white",
  letter,
  size = "normal",
  active = false,
}: Props) {
  const colorClass = {
    green: "bg-green text-bright border-green",
    yellow: "bg-yellow text-bright border-yellow",
    gray: "bg-gray text-bright border-gray",
    white: "bg-white text-dark border-gray",
  };

  const sizeClass = {
    small: "h-10 w-10 sm:h-12 sm:w-12",
    normal: "h-12 w-12 sm:h-14 sm:w-14",
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

  return (
    <div
      className={classNames(
        style,
        sizeClass[size],
        colorClass[color],
        active ? "border-dark" : ""
      )}
    >
      {letter}
    </div>
  );
}
