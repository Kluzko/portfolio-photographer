import React from "react";
import PropTypes from "prop-types";
import { ErrorMsg, Center } from "./styles";

const ErrorMessage = ({ children, font }) => {
  return (
    <Center>
      <ErrorMsg font={font}>{children}</ErrorMsg>
    </Center>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.string,
};

export default ErrorMessage;
