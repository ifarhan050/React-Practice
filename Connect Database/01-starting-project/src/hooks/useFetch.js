import { useState, useEffect } from 'react';
function useFetch(FetchFn,initialData = null) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        setError(null);
        try {
          const data = await FetchFn();
          setData(data);
        } catch (err) {
          setError(err.message);
        }
        setIsLoading(false);
      }
      fetchData();
    }, []);
  
    return { data, isLoading, error,setData };
  }

export default useFetch;