import React from "react";
import { StyledDialogButton } from "./styles";

const DialogButton = ({ text, handleClick }) => {
  return <StyledDialogButton onClick={handleClick}>{text}</StyledDialogButton>;
};

export default DialogButton;
