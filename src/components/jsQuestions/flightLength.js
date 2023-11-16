const flightLength = (arr, target) => {
  const set = new Set();

  for (const el of arr) {
    const diff = target - el;

    if (set.has(diff)) return true;

    set.add(el);
  }

  return false;
};

console.log(flightLength([80, 110, 40], 160)); // false
console.log(flightLength([80, 110, 80], 160)); // true
console.log(flightLength([20, 30, 110, 40, 50], 160)); // true
