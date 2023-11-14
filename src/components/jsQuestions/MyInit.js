const myInit = (s) => {
  return s
    .split(' ')
    .map((e) => `${e.slice(0, 1).toUpperCase()}.`)
    .join('');
};

console.log(myInit('bill Gates')); // 'B.G.'
