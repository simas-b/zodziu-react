import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  value?: string;
  spacer?: boolean;
  wide?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (value: string | undefined) => void;
  isColored?: boolean;
};

const style = [
  "transition-all",
  "duration-500",
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
  isColored = false,
}: Props) {
  return (
    <div
      className={classNames(
        style,
        isColored ? "bg-green text-bright" : "bg-silver text-dark"
      )}
      onClick={() => onClick && onClick(value)}
      style={{
        flex: spacer ? "none" : wide ? 1.8 : 1,
        visibility: spacer || disabled ? "hidden" : "visible",
        opacity: disabled ? 0 : 1,
      }}
    >
      {children}
    </div>
  );
}
