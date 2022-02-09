import generateSocialIcons from "./generateSocialIcons";

test("all yellow colors", () => {
  const state = ["labas", "albas", "labas", "albas", "labas", "albas"];
  const result = generateSocialIcons(state, "bsala");

  const expected = [
    "🟨🟨🟨🟨🟨",
    "🟨🟨🟨🟨🟨",
    "🟨🟨🟨🟨🟨",
    "🟨🟨🟨🟨🟨",
    "🟨🟨🟨🟨🟨",
    "🟨🟨🟨🟨🟨",
  ];

  expect(result).toEqual(expected);
});

test("all gray colors", () => {
  const state = ["prūžą", "žūęįc", "prūžą", "žūęįc", "prūžą"];
  const result = generateSocialIcons(state, "bsala");

  const expected = [
    "⬜⬜⬜⬜⬜",
    "⬜⬜⬜⬜⬜",
    "⬜⬜⬜⬜⬜",
    "⬜⬜⬜⬜⬜",
    "⬜⬜⬜⬜⬜",
    "⬜⬜⬜⬜⬜",
  ];

  expect(result).toEqual(expected);
});

test("all green colors", () => {
  const state = ["prūžą", "prūžą", "prūžą", "prūžą", "prūžą", "prūžą"];
  const result = generateSocialIcons(state, "prūžą");

  const expected = [
    "🟩🟩🟩🟩🟩",
    "🟩🟩🟩🟩🟩",
    "🟩🟩🟩🟩🟩",
    "🟩🟩🟩🟩🟩",
    "🟩🟩🟩🟩🟩",
    "🟩🟩🟩🟩🟩",
  ];

  expect(result).toEqual(expected);
});

test("mixed colors", () => {
  const state = ["labas", "malka", "žadėk", "puvęs", "grieš", "bambt"];
  const result = generateSocialIcons(state, "namas");

  const expected = [
    "⬜🟩⬜🟩🟩",
    "🟨🟩⬜⬜🟨",
    "⬜🟩⬜⬜⬜",
    "⬜⬜⬜⬜🟩",
    "⬜⬜⬜⬜⬜",
    "⬜🟩🟩⬜⬜",
  ];

  expect(result).toEqual(expected);
});
