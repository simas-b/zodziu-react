import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={classNames(styles.main)}>
      <div className={classNames(styles.container)}>{children}</div>
    </main>
  );
}

const styles = {
  main: ["h-screen", "p-4", "items-center", "text-dark", "bg-white"],
  container: [
    "flex",
    "flex-col",
    "items-center",
    "w-full",
    "h-full",
    "justify-around",
  ],
};
