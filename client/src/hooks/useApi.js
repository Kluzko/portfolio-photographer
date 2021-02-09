import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";
import { FetchContext } from "../context/FetchContext";
import { SERVER_API } from "../config";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url, auth = false) => {
  const fetchContext = useContext(FetchContext);
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData) =>
    setData((data) => ({
      ...data,
      ...partialData,
    }));
  const [refetch, setRefetch] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let res;
        if (!auth) {
          res = await axios(`${SERVER_API}api/v1/${url}`, {
            headers: { "Cache-Control": "no-cache" },
            adapter: throttleAdapterEnhancer(
              cacheAdapterEnhancer(axios.defaults.adapter)
            ),
          });
        } else {
          // has base url ${SERVER_API}api/v1
          res = await fetchContext.authAxios(url, {
            headers: { "Cache-Control": "no-cache" },
            adapter: throttleAdapterEnhancer(
              cacheAdapterEnhancer(axios.defaults.adapter)
            ),
          });
        }

        setPartData({
          state: apiStates.SUCCESS,
          data: res.data,
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
  }, [refetch, url]);

  return { data, setRefetch };
};
