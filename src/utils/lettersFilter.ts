//TODO: Write unit tests
export function getLettersExhausted(
  targetWord: string,
  state: string[]
): string[] {
  return [...state.join("")].filter((letter) => !targetWord.includes(letter));
}

export function getLettersGotRight(
  targetWord: string,
  state: string[]
): string[] {
  return [...state.join("")].filter((letter) => targetWord.includes(letter));
}

export function getLettersGotGreen(
  targetWord: string,
  state: string[]
): string[] {
  if (state.length === 0) return [];

  return [...state[state.length - 1]].filter(
    (letter, index) => targetWord[index] === letter
  );
}
