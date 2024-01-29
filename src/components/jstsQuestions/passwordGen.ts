const passwordGen = (): string => {
  const res: string[] = Array(Math.floor(Math.random() * 15 + 6));

  const randomLetter = (letters: string): string =>
    letters[Math.floor(Math.random() * 26)];

  const randomLowerLetter = (): string =>
    randomLetter('abcdefghijklmnopqrstuvwxyz');
  res[0] = randomLowerLetter();

  const randomUpperLetter = (): string =>
    randomLetter('ABCDEFGHOJKLMNOPQRSTUVWXYZ');
  res[1] = randomUpperLetter();

  const randomNumber = (): string => String(Math.floor(Math.random() * 10));
  res[2] = randomNumber();

  const randomItem = (): string => {
    const lowerLetter = randomLowerLetter();
    const upperLetter = randomUpperLetter();
    const number = randomNumber();

    const array = [lowerLetter, upperLetter, number];
    const random = Math.floor(Math.random() * 3);

    return array[random];
  };

  for (let i = 3; i < res.length; i += 1) {
    res[i] = randomItem();
  }

  return res.join('');
};

console.log(passwordGen()); // 6 - 20
