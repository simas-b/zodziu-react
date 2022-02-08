import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const styles = {
  container: [
    "select-none",
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "w-screen",
    "h-screen",
    "top-0",
    "left-0",
  ],

  card: [
    "duration-500",
    "flex",
    "flex-1",
    "flex-col",
    "justify-center",
    "items-center",
    "m-4",
    "py-4",
    "border-gray-200",
    "border-2",
    "rounded-md",
    "shadow-md",
    "bg-white",
    "z-20",
  ],

  overlay: [
    "w-screen",
    "h-screen",
    "z-10",
    "opacity-80",
    "bg-white",
    "fixed",
    "top-0",
    "left-0",
  ],
};

export default function Card({ isOpen = false, children }: Props) {
  return (
    <>
      <div className={classNames(styles.container, !isOpen && "invisible")}>
        <div
          className={classNames(
            styles.card,
            isOpen ? "opacity-1 " : "opacity-0 -translate-y-64"
          )}
          style={{ maxWidth: 450 }}
        >
          {children}
        </div>
      </div>
      <div className={classNames(styles.overlay, !isOpen && "invisible")}></div>
    </>
  );
}
