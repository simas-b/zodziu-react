import wordlist from "./wordlist";

const getTodaysGameNumber = () => {
  const gameStart = new Date(2022, 1, 4, 0, 0, 0, 0);
  const distance = new Date().getTime() - gameStart.getTime();

  const daysPassed = Math.floor(distance / (1000 * 60 * 60 * 24));

  return daysPassed % wordlist.length;
};

export const gameNumber = getTodaysGameNumber();
export const targetWord = wordlist[gameNumber];
