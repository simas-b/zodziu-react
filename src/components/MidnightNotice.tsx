import React, { useEffect, useState } from "react";

type Props = {
};

export default function MidnightNotice({ }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    // if (isMidnight) {
      setInterval(() => {
        setSecondsLeft((seconds) => seconds - 1);
      }, 1000);
    // }
  }, []);

  return (
    <div className="px-8">
      <h2 className="text-xl font-semibold tracking-widest my-4">
        Atėjo vidurnaktis! Naujas žodis už {secondsLeft}...
      </h2>
    </div>
  );
}
