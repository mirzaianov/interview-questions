// An efficient method for computing the greatest common divisor (GCD) of two integers,
// the largest number that divides them both without a remainder

const gcd = (a: number, b: number): number => {
  if (b === 0) return a;

  return gcd(b, a % b);
};

console.log(gcd(100, 550)); // 50
console.log(gcd(5892, 36)); // 12
