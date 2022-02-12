import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className={classNames(styles.main)}>{children}</main>;
}

const styles = {
  main: [
    "h-full",
    "flex",
    "flex-col",
    "text-dark",
    "bg-white",
    "items-center",
    "justify-around",
    "p-2",
  ],
};
