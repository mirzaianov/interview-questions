type F = (...args: number[]) => void;

const debounce = (callback: F): F => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: number[]): void => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), 1000);
  };
};

export default debounce;
