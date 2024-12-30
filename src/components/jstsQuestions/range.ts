const range = (nums: number[]): string => {
  const sorted = nums.sort((a, b) => a - b);

  let res = '';
  let l = 0;
  let r = 0;

  while (r < sorted.length) {
    if (sorted[r + 1] - sorted[r] === 1) {
      r += 1;
    } else {
      if (l === r) {
        res += `${sorted[l]}`;
      } else {
        res += `${sorted[l]}-${sorted[r]}`;
      }

      if (r < sorted.length - 1) {
        res += ',';
      }

      r += 1;
      l = r;
    }
  }

  return res;
};

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
console.log(range([1, 4, 3, 2])); // '1-4'
console.log(range([1])); // '1'
console.log(range([])); // ''

export default range;
