import { useQuery } from "react-query";
import { SERVER_API } from "../config";
const useDataFetch = (url, name) => {
  const api = `${SERVER_API}/api/v1/${url}`;
  const fetchFromApi = async () => {
    const res = await fetch(`${api}`);
    return await res.json();
  };
  const { isLoading, error, data } = useQuery(`${name}`, fetchFromApi);

  return {
    isLoading,
    error,
    data,
  };
};

export default useDataFetch;
