import React from "react";
import { StyledDeleteButton } from "./styles";

const DeleteButton = ({ text, handleClick }) => {
  return <StyledDeleteButton onClick={handleClick}>{text}</StyledDeleteButton>;
};

export default DeleteButton;
