import useFetch from '../hooks/useFetch';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const FetchData = () => {
  const [data, isLoading, error] = useFetch(URL);

  console.log(data, isLoading, error);

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
        {/* <button onClick={() => dataFetch(URL)}>Fetch data</button> */}
        <List items={data} />
      </div>
    </div>
  );
};

export default FetchData;
