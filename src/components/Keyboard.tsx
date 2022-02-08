import React from "react";
import Key from "./Key";
import enterIcon from "../assets/enter.svg";
import deleteIcon from "../assets/delete.svg";

const row1 = Array.from("ąčęėįšųūž");
const row2 = Array.from("ertyuiop");
const row3 = Array.from("asdfghjkl");
const row4 = Array.from("zcvbnm");

export default function Keyboard() {
  const handleClick = (value: string | undefined) => {
    document.dispatchEvent(new CustomEvent("touchpad", { detail: value }));
  };

  return (
    <div className="flex w-full flex-col" style={{ maxWidth: 450 }}>
      <div className="flex shrink justify-center">
        {row1.map((letter) => (
          <Key value={letter} key={letter} onClick={handleClick}>
            {letter}
          </Key>
        ))}
      </div>
      <div className="flex shrink justify-center">
        <Key spacer />
        {row2.map((letter) => (
          <Key value={letter} key={letter} onClick={handleClick}>
            {letter}
          </Key>
        ))}
        <Key spacer />
      </div>
      <div className="flex shrink justify-center">
        {row3.map((letter) => (
          <Key value={letter} key={letter} onClick={handleClick}>
            {letter}
          </Key>
        ))}
      </div>
      <div className="flex shrink justify-center">
        <Key wide value="enter" onClick={handleClick}>
          <img
            src={enterIcon}
            className="pointer-events-none"
            style={{ maxHeight: "70%" }}
            alt="enter"
          />
        </Key>
        {row4.map((letter) => (
          <Key value={letter} key={letter} onClick={handleClick}>
            {letter}
          </Key>
        ))}
        <Key wide value="delete" onClick={handleClick}>
          <img
            src={deleteIcon}
            className="pointer-events-none"
            style={{ maxHeight: "80%" }}
            alt="delete"
          />
        </Key>
      </div>
    </div>
  );
}
