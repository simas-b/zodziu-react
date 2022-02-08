import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  value?: string;
  spacer?: boolean;
  wide?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (value: string | undefined) => void;
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
  "color-dark",
  "bg-silver",
  "active:bg-gray",
  "rounded-md",
  "shadow",
  "uppercase",
  "select-none",
  "duration-500",
];

export default function Key({
  value,
  spacer,
  wide,
  disabled = false,
  children,
  onClick,
}: Props) {
  return (
    <div
      className={classNames(style)}
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