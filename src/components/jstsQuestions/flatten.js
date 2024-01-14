Array.prototype.flatten = function () {
  const result = [];
  const queue = [...this];

  while (queue.length) {
    const current = queue.shift();

    if (Array.isArray(current)) queue.unshift(...current);
    else result.push(current);
  }

  return result;
};

console.log([1, [2, [3]]].flatten());
