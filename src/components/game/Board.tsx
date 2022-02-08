type Props = {
  targetWord: string;
};

export default function Board({ targetWord }: Props) {
  return <div className="grid grid-cols-5 gap-1"></div>;
}
