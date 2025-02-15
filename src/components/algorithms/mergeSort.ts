const merge = (left: number[], right: number[]): number[] => {
  const res: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const value = left.shift();

      if (value !== undefined) res.push(value);
    } else {
      const value = right.shift();

      if (value !== undefined) res.push(value);
    }
  }

  return [...res, ...left, ...right];
};

const mergeSort = (nums: number[]): number[] => {
  const len: number = nums.length;

  if (len <= 1) return nums;

  const mid: number = Math.floor(len / 2);
  const left: number[] = nums.slice(0, mid);
  const right: number[] = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;

// console.log(mergeSort([3, 2, 15, 1, 5, 3, 11, 0]));
// console.log(mergeSort([3, 2, 15, 1, 10, 5, 3, 11, 0]));
