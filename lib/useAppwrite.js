import { useState, useEffect, useCallback, useRef } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fnRef.current();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
