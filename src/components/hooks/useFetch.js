import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let fetchCancelled = false;

    let fetchData = null;
    let fetchError = null;

    setData(null);
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        if (!fetchCancelled) fetchData = resData;
      })
      .catch((e) => {
        if (!fetchCancelled) fetchError = e;
      })
      .finally(() => {
        if (!fetchCancelled) {
          setData(fetchData);
          setIsLoading(false);
          setError(fetchError);
        }
      });

    return () => {
      fetchCancelled = true;
    };
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
