const sortEvenNumbers = (arr: number[]): number[] => {
  if (!arr.length) return arr;

  const evens: number[] = arr.filter((num) => num % 2 === 0);

  evens.sort((a, b) => a - b);

  return arr.map((num) => (num % 2 === 0 ? evens.shift()! : num));
};

console.log(sortEvenNumbers([5, 3, 2, 8, 1, 4]));

export default sortEvenNumbers;
