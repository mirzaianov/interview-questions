// function shuffle(nums) {
//   return nums.sort(() => Math.random() - 0.5);
// }

// Fisher-Yates shuffle

const shuffle = (nums: number[]): number[] => {
  const res: number[] = [...nums];

  for (let i = res.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [res[i], res[randomIndex]] = [res[randomIndex], res[i]];
  }

  return res;
};

export default shuffle;

// console.log(shuffle([1, 2, 3, 4]));
