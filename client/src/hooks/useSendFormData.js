import { useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { SERVER_API } from "../config";

import { FetchContext } from "../context/FetchContext";

export const useSendFormData = () => {
  const fetchContext = useContext(FetchContext);

  const [data, setData] = useState({
    error: "",
    loading: false,
    success: "",
    data: [],
  });

  const sendFormData = async ({
    formData,
    url,
    method,
    success,
    auth = false,
  }) => {
    const setPartData = (partialData) =>
      setData((data) => ({ ...data, ...partialData }));

    // start with loading
    setPartData({
      loading: true,
    });

    let response;
    try {
      if (method === "post") {
        if (auth) {
          response = await fetchContext.authAxios.post(
            `${SERVER_API}api/v1/${url}`,
            formData
          );
        } else {
          response = await axios.post(`${SERVER_API}api/v1/${url}`, formData);
        }
      } else if (method === "put") {
        if (auth) {
          response = await fetchContext.authAxios.put(
            `${SERVER_API}api/v1/${url}`,
            formData
          );
        } else {
          response = await axios.put(`${SERVER_API}api/v1/${url}`, formData);
        }
      } else if (method === "delete") {
        if (auth) {
          response = await fetchContext.authAxios.delete(
            `${SERVER_API}api/v1/${url}`,
            formData
          );
        } else {
          response = await axios.delete(`${SERVER_API}api/v1/${url}`, formData);
        }
      }

      setPartData({
        data: response.data,
        success,
        error: null,
      });
    } catch (err) {
      const { data } = err.response;
      setPartData({
        error: data.error,
        success: null,
      });
    } finally {
      setPartData({
        loading: false,
      });
    }

    // return only response only if is success
    if (response) return response.data;
  };

  return {
    sendFormData,
    data,
  };
};

PropTypes.sendFormData = {
  method: PropTypes.oneOf(["put", "post", "delete"]).isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
  formData: PropTypes.array,
};
