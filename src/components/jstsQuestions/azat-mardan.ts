const a: string = 'hello';
const b: string = 'Peter';

const capitalize = (str: string): string =>
  `${str[0].toUpperCase()}${str.substring(1)}`;

const fn = (first: string) => (second: string) =>
  `${capitalize(second)} ${first}!`;

console.log(fn(b)(a)); // Hello Peter!
