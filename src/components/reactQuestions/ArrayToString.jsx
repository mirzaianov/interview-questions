const data = [
  { value: 'abcd', order: 4, exppired: false },
  { value: 'qwer', order: 2, exppired: true },
  { value: 'xyz1', order: 1, exppired: false },
  { value: 'abx2', order: 3, exppired: false },
];

const calc = (array) => {
  const reverse = (string) => string.split('').reverse().join('');

  const set = new Set();

  const covered = (arr) =>
    arr
      .filter((item) => !item.exppired)
      .sort((a, b) => a.order - b.order)
      .map((item) => {
        const reversed = reverse(item.value);

        for (const letter of reversed) {
          set.add(letter);
        }

        return reversed;
      });

  covered(array);

  return [...set].join('');
};

const ArrayToString = () => {
  return (
    <div className="ArrayToString component">
      <h3>1. Create a string: </h3>
      <p>{calc(data)}</p>
    </div>
  );
};

export default ArrayToString;
