console.log('apple');

setTimeout(() => console.log('pear'), 0);

Promise.resolve('melon').then((res) => console.log(res));

new Promise((resolve, reject) => {
  console.log('orange');
  resolve('pineapple');
}).then((res) => console.log(res));

console.log('lime');
