const maxSubString = (string: string): string => {
  const set = new Set<string>();
  let max: string = '';
  let left: number = 0;
  let right: number = 0;

  while (right < string.length) {
    if (set.has(string[right])) {
      set.delete(string[left]);
      left += 1;
    } else {
      set.add(string[right]);

      const current: string = Array.from(set.values()).join('');

      current.length > max.length ? (max = current) : null;
      right += 1;
    }
  }

  return max;
};

console.log(maxSubString('ABABABCABAB')); // 'AB'
console.log(maxSubString('ABCDDDEFGI')); // 'DEFGI'
console.log(maxSubString('AAA')); // ''
