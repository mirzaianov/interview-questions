const pivotIndex = (nums: number[]): number => {
  const len = nums.length;
  let leftSum = 0;
  let rightSum = nums.reduce((acc, iten) => acc + iten, 0);

  for (let i = 0; i < len; i += 1) {
    const curr = nums[i];

    rightSum -= curr;
    console.log('rightSum 🚀', rightSum);

    if (leftSum === rightSum) return i;

    leftSum += curr;
    console.log('leftSum 🚀', leftSum);
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
