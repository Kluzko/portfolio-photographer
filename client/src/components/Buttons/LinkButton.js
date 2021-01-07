import React from "react";
import { Link } from "react-router-dom";

import { StyledLinkButton } from "./styles";

const LinkButton = ({ link, text }) => (
  <StyledLinkButton>
    <Link to={`/${link}`}>{text}</Link>
  </StyledLinkButton>
);

export default LinkButton;
