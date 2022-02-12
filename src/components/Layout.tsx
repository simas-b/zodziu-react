import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={classNames(styles.main)}>
      {/* <div className={classNames(styles.container)}>{children}</div> */}
      {children}
    </main>
  );
}

const styles = {
  // main: ["h-full", "p-2", "items-center", "text-dark", "bg-white"],
  main: ["h-full", "flex", "flex-col", "text-dark", "bg-white", "items-center", "justify-around", "p-2"],
  container: [
    "flex",
    "flex-col",
    "items-center",
    "w-full",
    "h-full",
    "justify-around",
  ],
};
