console.log('1');

setTimeout(() => {
  console.log('2');

  Promise.resolve().then(() => {
    console.log('3');
  });
}, 0);

new Promise((resolve, reject) => {
  console.log('4');

  setTimeout(() => {
    console.log('5');

    resolve('6');
  }, 0);
}).then((result) => {
  console.log('7');

  setTimeout(() => {
    console.log(result);
  }, 0);
});

/**
 * 1, 4, 2, 3, 5, 7, 6
 */
