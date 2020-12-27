import React from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { apiStates, useApi } from "../hooks/useApi";
import { useParams } from "react-router-dom";

const Album = () => {
  let { id } = useParams();
  const {
    data: { state, data, error },
  } = useApi(`http://localhost:5000/api/v1/albums/${id}`);

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General Error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      return (
        <div>
          <p>{data.data.name}</p>
          <p>{data.data.createdAt}</p>
        </div>
      );
    default:
      return <Loader />;
  }
};

export default Album;
