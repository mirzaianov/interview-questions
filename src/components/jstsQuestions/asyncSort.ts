const nums: number[] = [5, 7, 1, 3];
const sortedNums: number[] = [];

const asyncSort = (arr: number[]): Promise<number>[] => {
  return arr.map((num) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(sortedNums.push(num));
        console.log(sortedNums);
      }, num);
    });
  });
};

asyncSort(nums);
