Document.prototype.myGetElementById = function (id) {
  const queue = [...this.children];

  while (queue.length) {
    const current = queue.shift();

    if (current.id === id) return current;
    if (current.children) queue.unshift(...current.children);
  }

  return null;
};

console.log(document.myGetElementById('infobox-toggle'));
