import classNames from "classnames";
import React, { useEffect } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const styles = {
  container: [
    "fixed",
    "flex",
    "justify-center",
    "items-center",
    "w-full",
    "h-full",
    "top-0",
    "left-0",
    "text-bright",
  ],
};

export default function BadWordNotice({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose, isOpen]);

  return (
    <div
      className={classNames(styles.container)}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div
        className="flex w-full justify-center text-2xl font-semibold bg-red-400 p-8 mx-2 rounded-md"
        style={{
          transition: isOpen ? "none" : "all 0.7s ease-in",
          opacity: isOpen ? 1 : 0,
          maxWidth: 450,
        }}
      >
        <span>Žodžio nėra sąraše</span>
      </div>
    </div>
  );
}
