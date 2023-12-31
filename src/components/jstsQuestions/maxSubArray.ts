// O(n), O(n)
// O(n^2), O(n)

const maxSubArray = (nums: number[]): number => {
  const set = new Set<number>();
  let max: number = 0;
  let left: number = 0;
  let right: number = 0;

  while (right < nums.length) {
    if (set.has(nums[right])) {
      set.delete(nums[left]);
      left += 1;
    } else {
      set.add(nums[right]);
      max = Math.max(max, set.size);
      right += 1;
    }
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -1])); // 2
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([1, 1, 1, 1, 1])); // 1
console.log(maxSubArray([1, 2, 3, 3, 2, 1])); // 3
console.log(maxSubArray([1, 2, 3, 4, 5])); // 5
console.log(maxSubArray([1, 2, 3, 3, 4, 5, 6])); // 4
console.log(maxSubArray([1, 2, 3, 4, 5, 2, 2])); // 5
