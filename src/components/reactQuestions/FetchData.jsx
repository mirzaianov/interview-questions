import { useEffect, useState } from 'react';

const FetchData = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
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

    fetchItems();
  }, []);

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
    <div
      className="FetchData"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <h3>4. Fetch data: </h3>
        <button>Fetch data</button>
      </div>
      <ul
        style={{
          backgroundColor: 'lightgray',
          padding: '10px',
          borderRadius: '5px',
          paddingLeft: '30px',
        }}
      >
        {list(items)}
      </ul>
    </div>
  );
};

export default FetchData;
