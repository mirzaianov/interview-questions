const rand7 = (): number => {
  return Math.floor(Math.random() * 7) + 1;
};

const rand10 = (): number => {
  while (true) {
    const num = (rand7() - 1) * 7 + rand7();

    if (num <= 40) {
      return (num % 10) + 1;
    }
  }
};

export default rand10;
