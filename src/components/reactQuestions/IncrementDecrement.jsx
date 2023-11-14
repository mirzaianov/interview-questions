import { useState } from 'react';

export default function IncrementDecrement() {
  const [value, setValue] = useState(() => 0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <div className="IncrementDecrement">
      <h3>5. Increment - Decrement: </h3>
      <button onClick={decrement}>-</button>
      <h4>Value: {value}</h4>
      <button onClick={increment}>+</button>
    </div>
  );
}
