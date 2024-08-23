const printEqualNumbers = (min, max) => {
  for (let i = min; i <= max; i += 1) {
    const numberSum = i
      .toString()
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0);

    if (i % 3 === 0 && i % 5 !== 0 && numberSum < 10) {
      console.log(i);
    }
  }
};

printEqualNumbers(0, 1000);

export default printEqualNumbers;
