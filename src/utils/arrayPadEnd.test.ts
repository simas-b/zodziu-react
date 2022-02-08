import arrayPadEnd from "./arrayPadEnd";

test("padding empty array", () => {
  const result = arrayPadEnd([], 5);
  expect(result).toBe([null, null, null, null, null]);
});

test("padding nonempty array", () => {
  const result = arrayPadEnd(["foo", "bar", "baz"], 5);
  expect(result).toBe(["foo", "bar", "baz", null, null]);
});

test("padding full array", () => {
  const result = arrayPadEnd([1, 2, 3, 4, 5]);
  expect(result).toBe([1, 2, 3, 4, 5]);
});

test("padding array longer than length argument", () => {
  const result = arrayPadEnd([1, 2, 3, 4, 5, 6]);

  expect(result).toBe([1, 2, 3, 4, 5, 6]);
});
