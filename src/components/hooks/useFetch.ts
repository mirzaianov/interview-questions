import { useEffect, useState } from 'react';

// ! Correct types
type Data = any;

const useFetch = (
  url: string,
): { data: Data | null; isLoading: boolean; error: Error | null } => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url);

        // Server Error
        // Check whether the response was successful (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`Server error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
        }

        // Fetch Error
        // Check whether there are network issues
      } catch (e) {
        if (isMounted) {
          setError(e instanceof Error ? e : new Error('An unknown error!'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
