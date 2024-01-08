import { useState } from 'react';

const list = [
  {
    label: 'Mersedes',
  },
];

const cars = [
  'Audi',
  'Toyota',
  'Lexus',
  'Volkswagen',
  'Porsche',
  'Nissan',
  'Hyundai',
  'Kia',
  'Chevrolet',
  'Ford',
  'Renault',
  'Mazda',
  'Suzuki',
];

export default function CarData() {
  const [carsList, setCarsList] = useState(cars);
  const [listData, setListData] = useState(list);

  const pickCar = () => {
    const randomIndex = Math.floor(Math.random() * cars.length);
    const randomCar = carsList.splice(randomIndex, 1);
    const currentListItem = listData[0].label;

    setCarsList([...carsList, currentListItem]);
    setListData([{ label: randomCar }]);
  };

  return (
    <div className="CarData component">
      <h3>7. Car data: </h3>
      <p>По кнопке покупать случайную машину и помещать ее в гараж</p>
      <CarsView carsList={carsList} />
      <button onClick={pickCar}>Купить машину</button>
      <ListView items={listData} />
    </div>
  );
}

const CarsView = ({ carsList }) => {
  return (
    <div>
      Автосалон
      <ul>
        {carsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ListView = ({ items }) => {
  return (
    <div style={{ display: 'grid', rowGap: '6px' }}>
      Гараж
      {items.map((item) => (
        <ListItemView
          item={item}
          key={item.label}
        />
      ))}
    </div>
  );
};

const ListItemView = ({ item }) => {
  return (
    <div style={{ border: '1px solid black', padding: '6px' }}>
      {item.label}
    </div>
  );
};
