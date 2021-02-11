import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { apiStates, useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/AuthContext";
import { MasonryLayout, Wrapper } from "../../components/Wrappers";
import FormImageUpload from "../../components/Forms/FormImageUpload";
import { getDate } from "../../utils/getDate";
import ImageGalleryCard from "../../components/Card/ImageGalleryCard";

export const AlbumPageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 5rem;
  margin-top: 10%;
  p {
    color: black;
    margin-top: 2rem;
    margin-top: 20px;
    font-weight: bold;
  }
  span {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Album = () => {
  let { id } = useParams();
  const auth = useContext(AuthContext);

  const {
    data: { state, data, error },
    setRefetch,
  } = useApi(`albums/${id}`);

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General Error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const { name, createdAt, images } = data.data;
      const date = getDate(createdAt);

      return (
        <Wrapper>
          {auth.isAdmin() && <FormImageUpload id={id} />}
          <AlbumPageWrapper>
            <p>
              Name: <span>{name}</span>{" "}
            </p>
            <p>
              Date: <span>{date}</span>{" "}
            </p>
          </AlbumPageWrapper>

          {images.length > 0 ? (
            <MasonryLayout>
              {images.map((img) => {
                return (
                  <ImageGalleryCard
                    key={img._id}
                    id={img._id}
                    src={img.image}
                    refetch={setRefetch}
                  />
                );
              })}
            </MasonryLayout>
          ) : (
            <h1
              style={{
                marginTop: "5rem",
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "5rem",
              }}
            >
              No photos yet
            </h1>
          )}
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default Album;
