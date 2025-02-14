const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const value = left.shift();

      if (value !== undefined) result.push(value);
    } else {
      const value = right.shift();

      if (value !== undefined) result.push(value);
    }
  }

  return [...result, ...left, ...right];
};

const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  const center: number = Math.floor(nums.length / 2);
  const left: number[] = nums.slice(0, center);
  const right: number[] = nums.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3, 2, 15, 1, 5, 3, 11, 0]));
