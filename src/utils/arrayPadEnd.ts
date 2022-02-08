/**
 * Pad array end with undefined until it reaches arbitrary length (defaults to 5)
 */
 export default function arrayPadEnd<T>(
    array: (T | undefined)[],
    length: number = 6
  ): (T | undefined)[] {
    if (array.length >= length) return array;
  
    const result: (T | undefined)[] = [];
    for (let i = 0; i < length; i++) {
      result[i] = array[i] || undefined;
    }
    return result;
  }