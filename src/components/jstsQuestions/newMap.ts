type Callback<T, U> = (value: T, index: number, array: T[]) => U;

const newMap = <T, U>(arr: T[], callback: Callback<T, U>): U[] => {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
};

Array.prototype.map = function <T, U>(
  this: T[],
  callback: Callback<T, U>,
): U[] {
  return newMap(this, callback);
};

// Пример использования:

// const arr = [1, 2, 3, 4, 5];
// const doubledArr = arr.map((x) => x * 2);

// console.log(doubledArr); // [2, 4, 6, 8, 10]
