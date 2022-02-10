import classNames from "classnames";
import React from "react";

type Props = {
  icons: string[];
};

const styles = {
  container: [
    "shadow-lg",
    "shadow-silver",
    "select-none",
    "cursor-pointer",
    "leading-5",
    "border",
    "border-gray",
    "rounded-md",
  ],
};

export default function SocialStatus({ icons }: Props) {
  return (
    <div className={classNames(styles.container)}>
      {icons.map((icons, index) => (
        <div key={index}>{icons}</div>
      ))}
    </div>
  );
}
