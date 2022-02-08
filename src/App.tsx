import React from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
