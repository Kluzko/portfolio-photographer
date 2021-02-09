import React, { useContext } from "react";

import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { apiStates, useApi } from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { MasonryLayout, Wrapper } from "../../components/Wrappers";
import FormImageUpload from "../../components/Forms/FormImageUpload";
import { getDate } from "../../utils/getDate";

const Album = () => {
  let { id } = useParams();
  const auth = useContext(AuthContext);

  const {
    data: { state, data, error },
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
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginLeft: "5rem",
              marginTop: "10%",
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Name:{" "}
              <span
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                {name}
              </span>{" "}
            </p>
            <p
              style={{
                fontSize: "2rem",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Date:{" "}
              <span
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}
              >
                {date}
              </span>{" "}
            </p>
          </div>

          {images.length > 0 ? (
            <MasonryLayout>
              {images.map((img) => {
                return (
                  <div className="image-wrapper" key={img._id}>
                    <img
                      src={img.image}
                      alt={`zdjecie-${img._id}`}
                      loading="auto"
                    />
                  </div>
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
