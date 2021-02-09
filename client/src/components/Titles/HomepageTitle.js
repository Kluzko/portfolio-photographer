import React from "react";
import PropTypes from "prop-types";
import { StyledMainHeader } from "./styles";

export const HomepageTitle = ({ text, size, weight }) => {
  return (
    <StyledMainHeader size={size} weight={weight}>
      {text}
    </StyledMainHeader>
  );
};

HomepageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.oneOf(["bold", "lighter", "bolder", "light"]),
};
