function getUniqueItems(sequence: string): string[];
function getUniqueItems(sequence: number[]): number[];
function getUniqueItems(sequence: string[]): string[];
function getUniqueItems(
  sequence: string | number[] | string[],
): string[] | number[] {
  const res: (string | number)[] = [];
  let last: string | number | null = null;

  if (typeof sequence === 'string') {
    for (const item of sequence) {
      if (item !== last) {
        res.push(item);
        last = item;
      }
    }

    return res as string[];
  }

  for (const item of sequence) {
    if (item !== last) {
      res.push(item);
      last = item;
    }
  }

  return Array.isArray(sequence) && typeof sequence[0] === 'number'
    ? (res as number[])
    : (res as string[]);
}

console.log(getUniqueItems('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(getUniqueItems('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(getUniqueItems([1, 2, 2, 3, 3])); // [1, 2, 3]
console.log(
  getUniqueItems([
    'A',
    'A',
    'A',
    'A',
    'B',
    'B',
    'B',
    'C',
    'C',
    'D',
    'A',
    'A',
    'B',
    'B',
    'B',
  ]),
); // ['A', 'B', 'C', 'D', 'A', 'B']
