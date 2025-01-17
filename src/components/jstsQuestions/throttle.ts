type F = (...args: number[]) => void;

const throttle = (callback: F): F => {
  let isPaused = false;

  return (...args: number[]): void => {
    if (isPaused) return;

    callback(...args);
    isPaused = true;

    setTimeout(() => {
      isPaused = false;
    }, 1000);
  };
};

export default throttle;
