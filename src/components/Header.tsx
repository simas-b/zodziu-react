import React from "react";
import Logo from "./Logo";
import questionLogo from "../assets/question.svg";

type Props = {
  onClick: () => void;
};

export default function Header({ onClick }: Props) {
  return (
    <div className="flex items-center justify-between custom-header-size">
      <h2 className="text-2xl font-semibold tracking-widest">
        <Logo />
      </h2>
      <div className="cursor-pointer select-none" onClick={onClick}>
        <img
          src={questionLogo}
          alt="Game rules"
          className="custom-question-button-size"
        />
      </div>
    </div>
  );
}
