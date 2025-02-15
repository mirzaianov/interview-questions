const binarySearch = (nums: number[], target: number): number => {
  let l = 0;
  let r: number = nums.length - 1;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (nums[m] === target) return m;

    if (nums[m] < target) l = m + 1;

    if (nums[m] > target) r = m - 1;
  }

  return -1;
};

export default binarySearch;

// console.log(binarySearch([1, 3, 6, 7, 9, 11, 23, 56, 78, 99], 11));
