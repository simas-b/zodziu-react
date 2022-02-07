import React from "react";

type Row = [
  string | null,
  string | null,
  string | null,
  string | null,
  string | null
];

export type BoardState = [Row, Row, Row, Row, Row, Row];

export default function Game() {
  return <div>game</div>;
}
