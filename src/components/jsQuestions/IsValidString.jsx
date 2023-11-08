const isValidString = (str) => {
  const stack = [];
  const allowed = new Set(['(', ')']);
  const store = { ')': '(' };

  for (const letter of str) {
    if (!allowed.has(letter)) continue;

    const len = stack.length;
    const last = stack[len - 1];

    if (len !== 0 && last === store[letter]) stack.pop();
    else stack.push(letter);

    stack;
  }

  return !stack.length;
};

console.log(isValidString('(js)(grill())()')); // true
// console.log(isValidString('(()))()((()))()')); // false
// console.log(isValidString('()(())()(())()')); // true
// console.log(isValidString(')(')); // false
