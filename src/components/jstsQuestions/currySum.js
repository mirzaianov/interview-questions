const currySum = (a) => {
  if (!a) return 0;

  return (b) => {
    if (!b) return a;

    return currySum(a + b);
  };
};

console.log(currySum()); // 0
console.log(currySum(1)()); // 1
console.log(currySum(1)(4)()); // 5
console.log(currySum(5)(2)(2)()); // 9
