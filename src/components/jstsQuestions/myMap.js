Array.prototype.myMap = function (callback) {
  const res = [];

  for (const item of this) {
    const curr = callback(item);

    res.push(curr);
  }

  return res;
};

const arr1 = [1, 2, 3].myMap((item) => item * 2);
const arr2 = ['a', 'b', 'c'].myMap(console.log);

console.log(arr1);
console.log(arr2);
