import wordlist from "./wordlist";

const getTodaysGameNumber = () => {
  const gameStart = new Date(2022, 1, 8, 0, 0, 0, 0);
  const currentDayStart = new Date().setHours(0, 0, 0, 0);
  const distance = currentDayStart.getTime() - gameStart.getTime();

  const daysPassed = Math.round(distance / (1000 * 60 * 60 * 24));

  return daysPassed % wordlist.length;
};

export const gameNumber = getTodaysGameNumber();
export const targetWord = wordlist[gameNumber];