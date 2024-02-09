console.log('Start');

setTimeout(() => console.log('ST 1'));

Promise.resolve().then(() => console.log('P 1'));

Promise.resolve().then(setTimeout(() => console.log('ST 2'))); // NOTE:

Promise.resolve().then(() => console.log('P 2'));

setTimeout(() => console.log('ST 3'));

console.log('End');

/**
 * start, end, P 1, P 2, ST 1, ST 2, ST 3
 */
