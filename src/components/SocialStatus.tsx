import classNames from "classnames";
import React from "react";
import generateSocialIcons from "../utils/generateSocialIcons";

type Props = {
  endGameState: string[];
  targetWord: string;
  onCopied: () => void;
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
  onCopied,
}: Props) {
  const icons = generateSocialIcons(endGameState, targetWord);
  console.log(icons);
  const handleClick = () => {
    console.log("Copied");
    onCopied();
  };

  return (
    <div className={classNames(styles.container)} onClick={handleClick}>
      {icons.map((icons) => (
        <div>{icons}</div>
      ))}
    </div>
  );
}
