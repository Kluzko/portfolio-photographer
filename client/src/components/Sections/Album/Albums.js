import React from "react";
import { AlbumWrapper, ButtonWrapper } from "./style";
import { useApi, apiStates } from "../../../hooks/useApi";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import BasicCard from "../../Card/BasicCard";
import LinkButton from "../../Buttons/LinkButton";

export const Albums = () => {
  const {
    data: { state, data, error },
  } = useApi(`http://localhost:5000/api/v1/albums?limit=4`);

  const albums = data.data;

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      return (
        <>
          <AlbumWrapper>
            {albums.length > 0 ? (
              albums.map((album) => (
                <BasicCard
                  height="34rem"
                  color={album.color}
                  bckImg={album.bckImgUrl}
                  link={`/albums/${album._id}`}
                  id={album._id}
                  key={album._id}
                >
                  {album.name}
                </BasicCard>
              ))
            ) : (
              <h1>No albums yet</h1>
            )}
          </AlbumWrapper>
          {albums.length > 0 && (
            <ButtonWrapper>
              <LinkButton link="albums" text="See more..." />
            </ButtonWrapper>
          )}
        </>
      );
    default:
      return <Loader />;
  }
};
