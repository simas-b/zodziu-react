import React from "react";
import Logo from "./Logo";
import questionIcon from "../assets/question.svg";
import clockIcon from "../assets/clock.svg";
import classNames from "classnames";

type Props = {
  onQuestionClick: () => void;
  onClockClick: () => void;
  isClockVisible: boolean;
};

export default function Header({
  isClockVisible,
  onQuestionClick,
  onClockClick,
}: Props) {
  return (
    <div
      className="flex w-full items-center justify-between"
      style={{ maxWidth: 450 }}
    >
      <h2 className="text-2xl font-semibold tracking-widest">
        <Logo />
      </h2>
      <div className="flex">
        <div
          className={classNames(
            "cursor-pointer select-none",
            isClockVisible ? "visible" : "invisible"
          )}
          onClick={onClockClick}
        >
          <img
            src={clockIcon}
            alt="game results"
            className="custom-question-button-size"
          />
        </div>
        <div
          className="cursor-pointer select-none pl-4"
          onClick={onQuestionClick}
        >
          <img
            src={questionIcon}
            alt="Game rules"
            className="custom-question-button-size"
          />
        </div>
      </div>
    </div>
  );
}
