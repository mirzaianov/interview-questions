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
    <div
      className="ArrayToString"
      style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
    >
      <h3>1. Create a string: </h3>
      <p
        style={{
          backgroundColor: 'lightgray',
          padding: '10px',
          borderRadius: '5px',
          paddingLeft: '10px',
        }}
      >
        {calc(data)}
      </p>
    </div>
  );
};

export default ArrayToString;
