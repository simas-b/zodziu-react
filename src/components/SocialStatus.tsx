import classNames from "classnames";
import React from "react";
import generateSocialIcons from "../utils/generateSocialIcons";

type Props = {
  endGameState: string[];
  targetWord: string;
  gameNumber: number;
  onClick: (socialText: string) => void;
};

const styles = {
  container: [
    "shadow-lg",
    "shadow-silver",
    "select-none",
    "cursor-pointer",
    "leading-5",
    "border",
    "border-gray-400",
    "rounded-md",
  ],
};

export default function SocialStatus({
  endGameState,
  targetWord,
  onClick,
  gameNumber,
}: Props) {
  const icons = generateSocialIcons(endGameState, targetWord);

  const socialText = `ŽÓDŽIU №${gameNumber}\n\n` + icons;

  return (
    <div
      className={classNames(styles.container)}
      onClick={() => onClick(socialText)}
    >
      {icons.map((icons, index) => (
        <div key={index}>{icons}</div>
      ))}
    </div>
  );
}
