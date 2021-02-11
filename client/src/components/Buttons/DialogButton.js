import React from "react";
import PropTypes from "prop-types";
import { StyledDialogButton } from "./styles";

const DialogButton = ({ text, handleClick }) => {
  return <StyledDialogButton onClick={handleClick}>{text}</StyledDialogButton>;
};

PropTypes.DialogButton = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default DialogButton;
