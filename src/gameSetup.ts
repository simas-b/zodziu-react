import wordlist from "./wordlist";

const getTodaysGameNumber = () => {
  const gameStart = new Date(2022, 1, 7, 0, 0, 0, 0);
  const distance = new Date().getTime() - gameStart.getTime();

  return Math.floor(distance / (1000 * 60 * 60 * 24));
};

export const gameNumber = getTodaysGameNumber();
export const targetWord = wordlist[gameNumber];
