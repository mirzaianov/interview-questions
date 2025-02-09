const values: number[] = [5, 7, 30, 1, 3];

const asyncSort = async (nums: number[]): Promise<number[]> => {
  const sortedNums: number[] = [];

  const pushNum = (num: number) => sortedNums.push(num);

  const promises = (arr: number[]): Promise<number>[] => {
    return arr.map((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(pushNum(num));
        }, num);
      });
    });
  };

  await Promise.all(promises(nums));

  return sortedNums;
};

(async () => {
  const sortedNums = await asyncSort(values);

  console.log(sortedNums);
})();
