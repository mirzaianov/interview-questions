type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

function* newForOf<T extends object>(
  obj: T,
): Generator<Entry<T>, void, unknown> {
  const seen: PropertyKey[] = [];

  for (const key in obj) {
    if (seen.indexOf(key) === -1) {
      seen.push(key);
      yield [key, obj[key]] as Entry<T>;
    }
  }
}

// Пример использования

// const obj = { a: 1, b: 2, c: 3, d: 4 };

// for (const [key, value] of newForOf(obj)) {
//   console.log(`Ключ: ${key}, Значение: ${value}`);
// }
