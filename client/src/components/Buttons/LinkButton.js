import React from "react";
import { useHistory } from "react-router-dom";

import { StyledLinkButton } from "./styles";

const LinkButton = ({ link, text }) => {
  let history = useHistory();
  const PushRoute = () => {
    history.push(`/${link}`);
  };
  return <StyledLinkButton onClick={PushRoute}>{text}</StyledLinkButton>;
};

export default LinkButton;
