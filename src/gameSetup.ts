import wordlist from "./wordlist";
import moment from 'moment';

const getTodaysGameNumber = () => {
  const gameStart = moment('2022-01-08');
  const daysPassed = gameStart.diff(moment(), 'days');

  return daysPassed % wordlist.length;
};

export const gameNumber = getTodaysGameNumber();
export const targetWord = wordlist[gameNumber];
