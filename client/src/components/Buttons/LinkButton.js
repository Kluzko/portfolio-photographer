import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledLinkButton } from "./styles";

const LinkButton = ({ link, text }) => {
  let history = useHistory();
  const PushRoute = () => {
    history.push(`/${link}`);
  };
  return <StyledLinkButton onClick={PushRoute}>{text}</StyledLinkButton>;
};

PropTypes.LinkButton = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default LinkButton;
