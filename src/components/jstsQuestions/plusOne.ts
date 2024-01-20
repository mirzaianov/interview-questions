function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    const current = digits[i];

    if (current + 1 >= 10) {
      current = (current + 1) % 10;
    } else {
      current = current + 1;
      return digits;
    }
  }
  return [1, ...digits];
}
