import { useEffect, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;

    const timerId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isStarted]);

  return (
    <div className="Timer component">
      <h3>10. Timer: </h3>
      <button
        className="button"
        onClick={() => setIsStarted(true)}
      >
        Start
      </button>
      <button
        className="button"
        onClick={() => setIsStarted(false)}
      >
        End
      </button>
      {timer}
    </div>
  );
}
