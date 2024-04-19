/**
 *  The provided data is incomplete to be 100% sure of the function's behavior.
 *
 *  Below there are input array conditions and the function's behavoir according to my understanding of the task explanation:
 *
 *  1. The array contains only integers, -2^31 <= nums[i] <= 2^31 - 1.
 *  2. There might be more than 1 missing number in the array, but the function must return the
 *  first occurance in the sequence (as if the array were sorted).
 *  3. The array might be without missing numbers. In this case the function must return -1.
 *  4. The numbers are sequent by 1, except for the missing numbers.
 *  5. The array might have duplicate numbers.
 *  6. The numbers are not necessarily in a strict order.
 */

// Time O(N) | Space O(N)
const missingNumber = (nums: number[]): number => {
  // If the array is empty, immediately return -1
  if (!nums.length) return -1;

  // Remove duplicates
  const set = new Set<number>(nums);
  // Get the min integer
  const min = Math.min(...nums);

  // Iterate through the array and check if the number is missing
  for (let i = min; i <= min + nums.length - 1; i += 1) {
    if (!set.has(i)) return i;
  }

  // If there is no missing number, return -1
  return -1;
};

// Run the script, test cases must return 'SUCCESS'
((): void => {
  // Possible cases [[input array], answer]:
  const tests: Array<[number[], number]> = [
    // Your test cases
    [[5, 0, 1, 3, 2], 4],
    [[7, 9, 10, 11, 12], 8],
    // A case with an empty array. It returns -1, because there is no missing number in an empty array
    [[], -1],
    // A case with a single number in the array. It returns -1, because there is no missing number in the array
    [[555], -1],
    // A case with no missing numbers. Its return -1, because there is no missing number in the array
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -1],
    // A case with 1 duplicate number, 1 missing number, without a strict order
    [[7, 3, 5, 2, 6, 7, 8], 4],
    // A case with 2 duplicate numbers, 2 missing numbers, without a strict order. It return the first missing number in the sequence (as if the array were sorted)
    [[9, 3, 7, 6, 4, 9, 6, 10], 5],
    // A case with negative numbers
    [[3, -1, 4, 1, -2, 0], 2],
  ];

  tests.forEach((number: [number[], number], index: number): void => {
    const [array, answer] = number;
    const calc = missingNumber(array);
    const check = calc === answer;

    console.log(
      `#${index + 1}`,
      check ? 'SUCCESS' : 'FAILED',
      !check ? `${calc} === ${answer}` : '',
    );
  });
})();

/**
 *  If you had implied the following requirements:
 *
 *   " Given an array nums containing n distinct numbers in the range [0, n],
 *     return the only number in the range that is missing from the array. "
 *
 *  then the solution would be much easier.
 *
 *  Time O(N) | Space O(1)
 *  const missingNumber = (nums: number[]): number => {
 *    const len: number = nums.length;
 *    const fullSum: number = (len * (len + 1)) / 2;
 *    const currSum: number = nums.reduce((acc: number, item: number) => acc + item, 0);

 *    return fullSum - currSum;
 *  };
 */
