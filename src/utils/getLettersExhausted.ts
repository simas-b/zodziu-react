//TODO: Write unit tests
export default function getLettersExhausted(
  targetWord: string,
  state: string[]
): string[] {
  return [...state.join("")].filter((letter) => !targetWord.includes(letter));
}
