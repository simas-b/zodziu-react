import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  value?: string;
  spacer?: boolean;
  wide?: boolean;
  children?: ReactNode;
  onClick: (value: string | undefined) => void;
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
];

export default function Key({ value, spacer, wide, children, onClick }: Props) {
  return (
    <div
      className={classNames(style)}
      onClick={() => onClick(value)}
      style={{
        flex: spacer ? "none" : wide ? 1.8 : 1,
        visibility: spacer ? "hidden" : "visible",
      }}
    >
      {children}
    </div>
  );
}
