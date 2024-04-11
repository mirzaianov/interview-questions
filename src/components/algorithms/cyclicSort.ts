const cyclicSort = (array: number[]): number[] => {
  let i = 0;

  while (i < array.length) {
    const curr = array[i];

    if (curr - 1 !== i) {
      [array[i], array[curr - 1]] = [array[curr - 1], array[i]];
    } else {
      i += 1;
    }
  }

  return array;
};

console.log(cyclicSort([5, 1, 3, 4, 2])); // [1, 2, 3, 4, 5]
