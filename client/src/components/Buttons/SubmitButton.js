import React from "react";
import Loader from "react-loader-spinner";
import { StyledButton } from "./styles";
const SubmitButton = ({ loading, width }) => {
  return (
    <StyledButton type="submit" width={width}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            background: "none",
          }}
        >
          <span>Loading ... </span>
          <Loader
            type="Oval"
            color="#00BFFF"
            width={20}
            height={20}
            style={{
              background: "none",
            }}
          />
        </div>
      ) : (
        "Submit"
      )}
    </StyledButton>
  );
};

export default SubmitButton;
