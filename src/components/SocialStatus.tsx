import classNames from "classnames";
import React from "react";
import generateSocialIcons from "../utils/generateSocialIcons";

type Props = {
  endGameState: string[];
  targetWord: string;
  gameNumber: number;
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
  gameNumber,
}: Props) {
  const icons = generateSocialIcons(endGameState, targetWord);

  const socialText = `ŽÓDŽIU №${gameNumber}\n\n` + icons;

  const handleClick = () => {
    navigator.share({ text: socialText }).catch(() => {
      console.log(
        "navigator.share functionality unavailable. Trying to copy to clipboard"
      );
      navigator.clipboard.writeText(socialText);
    });

    onCopied();
  };

  return (
    <div className={classNames(styles.container)} onClick={handleClick}>
      {icons.map((icons, index) => (
        <div key={index}>{icons}</div>
      ))}
    </div>
  );
}
