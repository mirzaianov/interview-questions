const bubbleSort = (nums: number[]): number[] => {
  const res: number[] = [...nums];

  for (let i = 0; i < res.length; i += 1) {
    for (let j = 0; j < res.length - 1 - i; j += 1) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }

  return res;
};

export default bubbleSort;

// console.log(bubbleSort([23, 9, 34, 5, 6, 3, 44, 56, 1, 7, 2]));
