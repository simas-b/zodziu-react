type BoardState = string[];

type HistoryEntry = {
  state: BoardState;
  word: string;
};
const STORAGE_KEY = "gameHistory";

const gameHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function isFirstTime() {
  return !localStorage.getItem(STORAGE_KEY);
}

function loadState(targetWord: string) {
  const lastEntry = getLastHistoryEntry();
  if (lastEntry === undefined) return [];

  if (lastEntry.word !== targetWord) return [];

  return lastEntry.state;
}

function saveState(word: string, state: BoardState) {
  const lastEntry = getLastHistoryEntry();

  if (lastEntry === undefined || lastEntry.word !== word) {
    gameHistory.push({ word, state });
    persist();
    return;
  }

  lastEntry.state = state;
  persist();
}

function getLastHistoryEntry(): HistoryEntry | undefined {
  return gameHistory[gameHistory.length - 1];
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameHistory));
}

export { loadState, saveState, isFirstTime };
