import React from "react";
import Loading from "react-loader-spinner";

const Loader = () => (
  <Loading
    type="Oval"
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  />
);

export default Loader;
