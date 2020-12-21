import React from "react";
import { SERVER_API } from "../config";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import CardWithEdit from "../components/Card/CardWithEdit";
import ErrorMessage from "../components/ErrorMessage";
import { CartWrapper } from "../components/Wrappers";

const Albums = () => {
  const { isLoading, error, data } = useQuery("fetchAlbums", () =>
    fetch(`${SERVER_API}/api/v1/albums`).then((res) => res.json())
  );

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage font="1.5rem">{error.message}</ErrorMessage>;

  const albums = data.data;

  return (
    <CartWrapper>
      {albums.length > 0 ? (
        albums.map((album, i) => (
          <CardWithEdit
            width={"23rem"}
            height="16rem"
            color={album.color}
            bckImg={album.bckImgUrl}
            key={i}
            link={`/albums/${album._id}`}
            editLink={`edit/${album._id}`}
          >
            {album.name}
          </CardWithEdit>
        ))
      ) : (
        <h1>No albums yet</h1>
      )}
    </CartWrapper>
  );
};

export default Albums;
