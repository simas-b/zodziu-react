/**
 * Pad array end with undefined until it reaches arbitrary length
 */
export default function arrayPadEnd<T, K>(
  array: (T | K)[],
  element: K,
  length: number = 6,
): (T | K)[] {
  if (array.length >= length) return array;

  const result: (T | K)[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = array[i] || element;
  }
  return result;
}
