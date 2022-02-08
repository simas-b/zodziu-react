import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  value?: string;
  spacer?: boolean;
  wide?: boolean;
  children?: ReactNode;
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

export default function Key({ value, spacer, wide, children }: Props) {
  const handleClick = () => {
    document.dispatchEvent(new CustomEvent("touchpad", { detail: value }));
  };

  return (
    <div
      className={classNames(style)}
      onClick={handleClick}
      style={{
        flex: spacer ? "none" : wide ? 1.8 : 1,
        visibility: spacer ? "hidden" : "visible",
      }}
    >
      {children}
    </div>
  );
}
