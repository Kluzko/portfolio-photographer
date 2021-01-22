import { useState, useEffect } from "react";
import axios from "axios";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });
  const [refetch, setRefetch] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios(url);
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      } catch (err) {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        });
      }
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  return { data, setRefetch };
};
