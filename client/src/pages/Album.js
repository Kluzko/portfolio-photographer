import React from "react";
import useDataFetch from "../hooks/useDataFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import { useParams } from "react-router-dom";

const Album = () => {
  let { id } = useParams();
  const { isLoading, error, data } = useDataFetch(`albums/${id}`, "fetchAlbum");

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage font="1.5rem">{error.message}</ErrorMessage>;
  return <div>{data.data.name}</div>;
};

export default Album;
