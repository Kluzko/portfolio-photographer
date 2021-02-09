import React, { useContext } from "react";
import Loader from "../../components/Loader";
import CardWithEdit from "../../components/Card/CardWithEdit";
import ErrorMessage from "../../components/ErrorMessage";
import { CartWrapper } from "../../components/Wrappers";
import { apiStates, useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/AuthContext";
import { BasicCard } from "../../components/Card";
const Albums = () => {
  const {
    data: { state, error, data },
    setRefetch,
  } = useApi("albums");
  const auth = useContext(AuthContext);

  const albums = data.data;
  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      return (
        <CartWrapper>
          {albums.length > 0 ? (
            albums.map((album) =>
              auth.isAdmin() ? (
                <CardWithEdit
                  width={"23rem"}
                  height="16rem"
                  color={album.color}
                  bckImg={album.bckImgUrl}
                  key={album._id}
                  link={`/albums/${album._id}`}
                  editLink={`editAlbum/${album._id}`}
                  id={album._id}
                  deleteId={setRefetch}
                >
                  {album.name}
                </CardWithEdit>
              ) : (
                <BasicCard
                  width={"23rem"}
                  height="16rem"
                  color={album.color}
                  bckImg={album.bckImgUrl}
                  key={album._id}
                  link={`/albums/${album._id}`}
                >
                  {album.name}
                </BasicCard>
              )
            )
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
