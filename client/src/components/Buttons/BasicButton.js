import React from "react";
import PropTypes from "prop-types";
import { BasicButton } from "./styles";

const Button = ({ text, handleClick }) => {
  return <BasicButton onClick={handleClick}>{text}</BasicButton>;
};

PropTypes.Button = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
