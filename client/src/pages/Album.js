import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { SERVER_API } from "../config";
import { useParams } from "react-router-dom";

const Album = () => {
  let { id } = useParams();
  const { isLoading, error, data } = useQuery("fetchAlbum", () =>
    fetch(`${SERVER_API}/api/v1/albums/${id}`).then((res) => res.json())
  );

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage font="1.5rem">{error.message}</ErrorMessage>;
  return <div>{data.data.name}</div>;
};

export default Album;
