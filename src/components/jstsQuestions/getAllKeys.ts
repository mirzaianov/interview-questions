const getAllKeys = (obj: unknown): string[] => {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Argument must be an object');
  }

  const keys: Set<string> = new Set();

  let currentObj: object | null = obj;

  while (currentObj !== null) {
    Object.keys(currentObj).forEach((key: string) => keys.add(key));
    currentObj = Object.getPrototypeOf(currentObj);
  }

  return Array.from(keys);
};

// Пример использования:

// const obj = { a: 1, b: 2 };

// Object.setPrototypeOf(obj, { c: 3, d: 4 });

// console.log(getAllKeys(obj)); // ["a", "b", "c", "d"]
