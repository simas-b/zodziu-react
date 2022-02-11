import classNames from "classnames";
import React, { ReactNode, SyntheticEvent } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: (e?: SyntheticEvent) => void;
};

const styles = {
  container: [
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "z-20",
    "select-none",
    "py-4",
  ],

  card: [
    "flex",
    "flex-col",
    "flex-none",
    "items-center",
    "p-4",
    "border-silver",
    "border-2",
    "rounded-md",
    "shadow-md",
    "bg-white",
    "z-30",
  ],
};

export default function Card({ isOpen = false, children, onClose }: Props) {
  return (
    <>
      <div
        className={classNames(styles.container)}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255,0.8)",
          maxHeight: "100%",
        }}
        onClick={onClose}
      >
        <div
          className={classNames(
            styles.card,
            isOpen ? "opacity-1" : "opacity-0 -translate-y-64"
          )}
          style={{
            width: "90%",
            maxWidth: 450,
            maxHeight: "100%",
            transition: "all 0.5s ease",
            overflowY: "auto",
          }}
        >
          {children}
          {onClose && (
            <h2
              onClick={onClose}
              className="cursor-pointer select-none mt-2 self-center font-semibold tracking-wider"
            >
              UŽDARYTI
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
