const firstDuplicate = (str) => {
  const set = new Set();

  for (const letter of str) {
    if (set.has(letter)) return letter;

    set.add(letter);
  }

  return null;
};

console.log(firstDuplicate('abca')); // a
console.log(firstDuplicate('abcdefe')); // e
console.log(firstDuplicate('abcdef')); // null
