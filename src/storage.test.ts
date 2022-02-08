import { loadState, saveState } from "./storage";

test("saving state", () => {
  saveState("foo", ["foo", "bar", "baz"]);

  expect(loadState("foo")).toEqual(["foo", "bar", "baz"]);
});
