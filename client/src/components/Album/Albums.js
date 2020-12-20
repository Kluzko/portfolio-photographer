import React, { Fragment } from "react";
import { SERVER_API } from "../../config";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import { Card, Wrapper, AlbumtTitle, LinkButton } from "../../styles/Card";

const Albums = () => {
  const { isLoading, error, data } = useQuery("fetchAlbums", () =>
    fetch(`${SERVER_API}/api/v1/albums`).then((res) => res.json())
  );

  if (isLoading)
    return (
      <Loader
        type="Oval"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    );

  if (error)
    return (
      <Fragment>
        <h1>Oops something went wrong</h1>
        <p>{error.message}</p>
      </Fragment>
    );
  const albums = data.data;
  return (
    <Wrapper>
      {albums.map((album, i) => (
        <Card width="23rem" height="16rem" bckImg={album.bckImgUrl} key={i}>
          <AlbumtTitle color={album.color}>{album.name}</AlbumtTitle>
          <LinkButton background={album.color} to={`/albums/${album._id}`}>
            See more
          </LinkButton>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Albums;
