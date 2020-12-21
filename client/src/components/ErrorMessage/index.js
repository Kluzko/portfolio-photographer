import React from "react";
import PropTypes from "prop-types";
import { ErrorMsg, Center } from "./styles";

const ErrorMessage = ({ children, font }) => {
  return (
    <Center>
      <h3>Something went wrong</h3>
      <ErrorMsg font={font}>{children}</ErrorMsg>
    </Center>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
  font: PropTypes.string,
};

export default ErrorMessage;
