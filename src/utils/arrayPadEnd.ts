/**
 * Return copy of array with end padded with provided element to specified
 * length
 */
export default function arrayPadEnd<T, K>(
  array: (T | K)[],
  element: K,
  length: number = 6
): (T | K)[] {
  if (array.length >= length) return [...array];

  const result: (T | K)[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = array[i] || element;
  }
  return result;
}
