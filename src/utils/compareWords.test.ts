import compareWords from "./compareWords";

test("word too long", () => {
  expect(() => {
    compareWords("labasa", "labas");
  }).toThrowError();
});

test("word too short", () => {
  expect(() => {
    compareWords("lab", "labas");
  }).toThrowError();
});

test("equal words", () => {
  const result = compareWords("diena", "diena");
  expect(result).toEqual(["green", "green", "green", "green", "green"]);
});

test("similar words", () => {
  const result = compareWords("diena", "labas");
  expect(result).toEqual(["gray", "gray", "gray", "gray", "yellow"]);
});

test("all gray squares", () => {
  const result = compareWords("viena", "butur");
  expect(result).toEqual(["gray", "gray", "gray", "gray", "gray"]);
});

test("all yellow squares", () => {
  const result = compareWords("viena", "ivnae");
  expect(result).toEqual(["yellow", "yellow", "yellow", "yellow", "yellow"]);
});

test("green followed by yellow same letter", () => {
  const result = compareWords("lilip", "liira");
  expect(result).toEqual(["green", "green", "gray", "yellow", "gray"]);
});

test("lithuanian letters", () => {
  const result = compareWords("ąčęėį", "ąčęėį");
  expect(result).toEqual(["green", "green", "green", "green", "green"]);
});

test("lithuanian letters2", () => {
  const result = compareWords("šųūža", "šųūža");
  expect(result).toEqual(["green", "green", "green", "green", "green"]);
});
