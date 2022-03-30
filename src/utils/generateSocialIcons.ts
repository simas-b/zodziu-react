import compareWords from "./compareWords";
// import arrayPadEnd from "./arrayPadEnd";
import { Color } from "../components/Square";

export default function generateSocialIcons(
  gameState: string[],
  targetWord: string
) {
  //   const fullState = arrayPadEnd(gameState, null, 6);
  //   const emptyRow = "⬜⬜⬜⬜⬜";

  return gameState.map((row) =>
    // row === null
    //   ? emptyRow
    compareWords(row, targetWord)
      .map((color) => convertColorToIcon(color))
      .join("")
  );
}

function convertColorToIcon(color: Color): string {
  switch (color) {
    case "gray":
      return "⬜";
    case "green":
      return "🟦";
    case "yellow":
      return "🟨";
    default:
      throw new Error(
        "Invalid color argument for convertColorToIcon() function."
      );
  }
}
