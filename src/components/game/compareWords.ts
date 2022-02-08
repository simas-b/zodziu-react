import type { Color } from "./Square";

export type FullWordArray = [string, string, string, string, string];

const compareWords: (guess: FullWordArray, target: string) => Color[] = (
  guess,
  target
) => {
  const guessArray: Array<string | null> = guess;
  const targetArray: Array<string | null> = Array.from(target);

  const result: Array<Color> = [];

  // First deal with letters we guessed right
  guessArray.forEach((letter, column) => {
    if (targetArray[column] === letter) {
      guessArray[column] = null;
      targetArray[column] = null;

      result[column] = "green";
    }
  });

  // We're left with letters that are either wrong or in wrong place
  guessArray.forEach((letter, column) => {
    if (letter === null) return;

    // Letter is wrong
    if (!targetArray.includes(letter)) {
      result[column] = "gray";
      return;
    }

    // Letter is in wrong place. Remove it from target so we later don't mark
    // same letter yellow in case only one in target is present
    targetArray[targetArray.indexOf(letter)] = null;

    result[column] = "yellow";
  });

  return result;
};

export default compareWords;
