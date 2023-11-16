import { useState } from 'react';

const FetchData = () => {
  const [items, setItems] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();

      setItems(data);
    } catch (error) {
      console.log('error >>', error);
    }
  };

  const list = (data) =>
    data &&
    data.map((item, index) =>
      index < 5 ? (
        <li key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </li>
      ) : null,
    );

  return (
    <div className="FetchData component">
      <h3>4. Fetch data: </h3>
      <div>
        <button onClick={() => fetchItems()}>Fetch data</button>
        <ul>{list(items)}</ul>
      </div>
    </div>
  );
};

export default FetchData;
