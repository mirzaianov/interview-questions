import { useEffect, useState } from 'react';

const URL = 'https://jsonplacholder.typicode.com/posts';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataFetch = (url) => {
    let cancelled = false;
    let data = null;
    let error = null;

    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((respData) => {
        if (!cancelled) data = respData;
      })
      .catch((e) => {
        if (!cancelled) error = e;
      })
      .finally(() => {
        if (!cancelled) {
          setData(data);
          setError(error);
          setIsLoading(false);
        }
      });

    return () => (cancelled = true);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const List = ({ items }) =>
    items &&
    items.map((item, index) =>
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
        <button onClick={() => dataFetch(URL)}>Fetch data</button>
        <List items={data} />
      </div>
    </div>
  );
};

export default FetchData;
