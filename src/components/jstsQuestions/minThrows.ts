const findMinThrows = (floors: number, target: number) => {
  const step: number = Math.ceil(Math.sqrt(floors));
  let throws = 0;
  let curr = step;

  while (curr <= floors) {
    throws += 1;

    if (curr >= target) break;

    curr += step;
  }

  for (let i = curr - step + 1; i < curr; i += 1) {
    throws += 1;

    if (i >= target) break;
  }

  return throws;
};

export default findMinThrows;

console.log(findMinThrows(100, 70)); // 16
console.log(findMinThrows(200, 70)); // 15
console.log(findMinThrows(500, 221)); // 24
console.log(findMinThrows(1500, 333)); // 30
