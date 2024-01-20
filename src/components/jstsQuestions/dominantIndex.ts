function dominantIndex(nums: number[]): number {
  const maxIndex = nums.indexOf(Math.max(...nums));

  nums.sort((a, b) => b - a);

  if (nums[0] >= 2 * nums[1]) return maxIndex;

  return -1;
}
