import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  value?: string;
  spacer?: boolean;
  wide?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (value: string | undefined) => void;
  isEnterColored?: boolean;
  isGreen?: boolean;
  isYellow?: boolean;
  isWordCorrect?: boolean;
};

const style = [
  "flex",
  "items-center",
  "justify-center",
  "cursor-pointer",
  "text-md",
  "h-12",
  "m-0.5",
  "p-2",
  "active:bg-gray",
  "rounded-md",
  "shadow",
  "uppercase",
  "select-none",
];

export default function Key({
  value,
  spacer,
  wide,
  disabled = false,
  children,
  onClick,
  isEnterColored = false,
  isGreen,
  isYellow,
  isWordCorrect,
}: Props) {
  return (
    <div
      className={classNames(
        style,
        isEnterColored && isWordCorrect
          ? "bg-green text-bright"
          : isEnterColored && !isWordCorrect
          ? "bg-red-400 text-bright"
          : isGreen
          ? "bg-green text-bright"
          : isYellow
          ? "bg-yellow text-bright"
          : "bg-silver text-dark"
      )}
      onClick={() => onClick && onClick(value)}
      style={{
        flex: spacer ? "none" : wide ? 1.8 : 1,
        visibility: spacer ? "hidden" : "visible",
        opacity: isGreen ? 0.9 : isYellow ? 0.8 : disabled ? 0.3 : 1,
      }}
    >
      {children}
    </div>
  );
}
