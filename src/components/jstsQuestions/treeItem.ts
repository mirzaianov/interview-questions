export interface TreeItem {
  id: string;
  children?: TreeItem[];
}

export const getAllItems = (tree: TreeItem): string[] => {
  if (!tree) return [];

  const stack: TreeItem[] = [tree];
  const result: string[] = [];

  while (stack.length > 0) {
    const item: TreeItem | undefined = stack.shift();

    if (item !== undefined) {
      if (item.children) {
        stack.push(...item.children);
      }

      result.push(item.id);
    }
  }

  return result;
};

const recursiveGetAllItems = (tree: TreeItem): string[] => {
  const result: string[] = [];

  const dfs = (node: TreeItem) => {
    if (!node) return;

    result.push(node.id);

    if (node.children) {
      for (const child of node.children) {
        dfs(child);
      }
    }
  };

  dfs(tree);

  return result;
};

const testTree = {
  id: 'a',
  children: [
    {
      id: 'b',
      children: [
        {
          id: 'd',
        },
        {
          id: 'e',
        },
        {
          id: 'f',
        },
      ],
    },
    {
      id: 'c',
      children: [
        {
          id: 'g',
        },
        {
          id: 'h',
        },
      ],
    },
  ],
};

console.log(getAllItems(testTree));
console.log(recursiveGetAllItems(testTree));
