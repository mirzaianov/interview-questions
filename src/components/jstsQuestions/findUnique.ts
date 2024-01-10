const findUnique = (arr: number[]): number => {
  let res = 0;

  for (let i = 0; i < arr.length; i += 1) {
    res ^= arr[i];
  }

  return res;
};

console.log(findUnique([3, 5, 2, 4, 3, 2, 5])); // 4
