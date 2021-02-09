import React from "react";
import { AlbumWrapper, ButtonWrapper } from "./style";
import { useApi, apiStates } from "../../../hooks/useApi";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import { BasicCard } from "../../Card";
import { LinkButton } from "../../Buttons";

export const Albums = () => {
  const {
    data: { state, data, error },
  } = useApi(`albums?limit=4`);

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
