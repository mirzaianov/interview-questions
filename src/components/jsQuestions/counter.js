const counter = () => {
  let count = 0;

  return function () {
    count += 1;

    return count;
  };
};

const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());

console.log(counter1());

console.log(counter2());
