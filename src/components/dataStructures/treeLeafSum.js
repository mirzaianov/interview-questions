class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 *           5
 *         /   \
 *       11     3
 *      /  \     \
 *     4    2     1
 */

const s = new Node(5);
const t = new Node(11);
const u = new Node(3);
const v = new Node(4);
const w = new Node(2);
const x = new Node(1);

s.left = t;
s.right = u;
t.left = v;
t.right = w;
u.right = x;

const treeLeafSum = (root) => {
  if (!root) return 0;

  if (!root.left && !root.right) return root.val;

  return treeLeafSum(root.left) + treeLeafSum(root.right);
};

console.log(treeLeafSum(s));
