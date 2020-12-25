import React from "react";
import Loader from "../components/Loader";
import CardWithEdit from "../components/Card/CardWithEdit";
import ErrorMessage from "../components/ErrorMessage";
import { CartWrapper } from "../components/Wrappers";
import { apiStates, useApi } from "../hooks/useApi";
const Albums = () => {
  const { state, error, data } = useApi("http://localhost:5000/api/v1/albums");

  // if (isLoading) return <Loader />;

  // if (error) return <ErrorMessage font="1.5rem">{error.message}</ErrorMessage>;
  const albums = data.data;
  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      return (
        <CartWrapper>
          {albums.length > 0 ? (
            albums.map((album) => (
              <CardWithEdit
                width={"23rem"}
                height="16rem"
                color={album.color}
                bckImg={album.bckImgUrl}
                key={album._id}
                link={`/albums/${album._id}`}
                editLink={`edit/${album._id}`}
                id={album._id}
              >
                {album.name}
              </CardWithEdit>
            ))
          ) : (
            <h1>No albums yet</h1>
          )}
        </CartWrapper>
      );
    default:
      return <Loader />;
  }
};

export default Albums;
