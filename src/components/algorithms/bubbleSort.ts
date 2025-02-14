const bubbleSort = (array: number[]): number[] => {
  const sortedArray: number[] = [...array];

  for (let i = 0; i < sortedArray.length; i += 1) {
    for (let j = 0; j < sortedArray.length - 1 - i; j += 1) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }
  }

  return sortedArray;
};

export default bubbleSort;

// console.log(bubbleSort([23, 9, 34, 5, 6, 3, 44, 56, 1, 7, 2]));
