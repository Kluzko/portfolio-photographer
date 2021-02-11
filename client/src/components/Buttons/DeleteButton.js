import React from "react";
import { StyledDeleteButton } from "./styles";
import PropTypes from "prop-types";

const DeleteButton = ({ text, handleClick }) => {
  return <StyledDeleteButton onClick={handleClick}>{text}</StyledDeleteButton>;
};

PropTypes.DeleteButton = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default DeleteButton;
