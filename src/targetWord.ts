import wordlist from "./wordlist";

const getTodaysGameNumber = () => {
  const gameStart = new Date(2022, 1, 5, 0, 0, 0, 0);
  const distance = new Date().getTime() - gameStart.getTime();

  return Math.floor(distance / (1000 * 60 * 60 * 24));
};

export default wordlist[getTodaysGameNumber()];
