import React from "react";
import { BasicButton } from "./styles";

const Button = ({ text, handleClick }) => {
  return <BasicButton onClick={handleClick}>{text}</BasicButton>;
};

export default Button;
