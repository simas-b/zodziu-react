import React, { useEffect, useState } from "react";

type Props = {
  onTimeUp: () => void;
};

type Time = {
  h: string;
  m: string;
  s: string;
};

let nextMidnightDate = new Date();
nextMidnightDate.setDate(nextMidnightDate.getDate() + 1);
nextMidnightDate.setHours(0, 0, 0, 0);

// uncomment for debugging
nextMidnightDate = new Date();
nextMidnightDate.setSeconds(nextMidnightDate.getSeconds() + 10);

export default function Countdown({ onTimeUp }: Props) {
  const [time, setTime] = useState<Time | undefined>();

  useEffect(() => {
    tick();
    const intervalID = setInterval(tick, 1000);

    function tick() {
      const distance = nextMidnightDate.getTime() - new Date().getTime();
      const h = Math.floor(distance / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const s = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      if (distance < 0) {
        clearInterval(intervalID);
        onTimeUp();
        return;
      }

      setTime({ h, m, s });
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [onTimeUp]);

  return (
    <div className="flex py-2 font-bold">
      <div className="text-3xl">{time?.h}</div>
      <div className="text-3xl">:</div>
      <div id="minutesLeft" className="text-3xl">
        {time?.m}
      </div>
      <div className="text-3xl">:</div>
      <div id="secondsLeft" className="text-3xl">
        {time?.s}
      </div>
    </div>
  );
}
