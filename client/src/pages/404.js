import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrappers";

const FourOFour = () => {
  return (
    <Wrapper>
      <p
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        404 Page Not found
      </p>
      <Link to="/">Go to Home page</Link>
    </Wrapper>
  );
};

export default FourOFour;
