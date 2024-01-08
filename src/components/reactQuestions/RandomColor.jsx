import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('lightgray');

  const randomColor = () => {
    const generateColor = () => {
      return Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, '0');
    };

    const red = generateColor();
    const green = generateColor();
    const blue = generateColor();

    return `#${red}${green}${blue}`;
  };

  return (
    <div className="RandomColor component">
      <h3>8. Random color: </h3>
      <button
        className="button"
        onClick={() => setColor(randomColor())}
      >
        Pick a color!
      </button>
      <div
        className="generated-color"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default RandomColor;
