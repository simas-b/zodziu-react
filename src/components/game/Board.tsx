import type { BoardState } from "./Game";

type Props = {
  boardState: BoardState;
  targetWord: string;
};

export default function Board({ boardState, targetWord }: Props) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {boardState.map((row) => (
        <Row guess={row} targetWord={targetWord} />
      ))}
    </div>
  );
}
