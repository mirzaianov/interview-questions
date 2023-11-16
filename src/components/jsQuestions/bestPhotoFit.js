const bestPhotoFit = (arr, target) => {
  const newArr = arr.map((item) => item[0] / item[1]);
  const newTarget = target[0] / target[1];

  const map = new Map();

  for (const [key, value] of Object.entries(newArr)) {
    const curr = Math.abs(newTarget - value) / newTarget;

    map.set(+key, curr);
  }

  const res = [Infinity, Infinity];

  for (const [key, value] of map) {
    if (value < res[1]) {
      res[0] = key;
      res[1] = value;
    }
  }

  return res[0];
};

console.log(
  bestPhotoFit(
    [
      [10, 8],
      [14, 7],
      [9, 15],
      [12, 13],
    ],
    [10, 15],
  ),
);

/**
 * 10/15
 * 0.667
 * [10, 8], [14, 7], [9, 15], [12, 13]
 * [10, 8], [10, 5], [9, 15], [10, 10.83]
 *                   [135], [108.3]
 *
 *   80        98      135        156
 *
 *   10/8       14/7     9/15      12/13
 *    1.25       2        0.6       0.923
 *
 *  0.667 - 100%
 *  | (0.677 - 1.25) |  - x
 *
 */
