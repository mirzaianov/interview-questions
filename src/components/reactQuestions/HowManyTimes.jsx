// Сколько раз сработает функция “handler” в ChildComponent? (React.StrictMode выключен)

import { useState, useEffect } from 'react';

const printHello = () => console.log('Hello world');

export default function HowManyTimes() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => setCounter((prev) => prev + 1), 2000);
  }, []);

  return (
    <div>
      Counter: {counter}
      <ChildComponent handler={printHello} />
    </div>
  );
}

const ChildComponent = ({ handler }) => {
  handler();

  return (
    <div>
      <h3>Child component</h3>
    </div>
  );
};
