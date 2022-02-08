import arrayPadEnd from "./arrayPadEnd";

test("padding empty array", () => {
  const result = arrayPadEnd([], 5);
  expect(result).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

test("padding nonempty array", () => {
  const result = arrayPadEnd(["foo", "bar", "baz"], 5);
  expect(result).toEqual(["foo", "bar", "baz", undefined, undefined]);
});

test("padding full array", () => {
  const result = arrayPadEnd([1, 2, 3, 4, 5, 6], 6);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

test("padding array longer than length argument", () => {
  const result = arrayPadEnd([1, 2, 3, 4, 5, 6], 5);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
