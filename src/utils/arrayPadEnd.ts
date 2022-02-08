/**
 * Pad array end with null until it reaches arbitrary length (defaults to 5)
 */
export default function arrayPadEnd<T>(
  array: (T | null)[],
  length: number = 5
): (T | null)[] {
  if (array.length >= length) return array;

  const result: (T | null)[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = array[i] || null;
  }
  return result;
}
