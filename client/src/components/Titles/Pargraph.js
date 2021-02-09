import React from "react";
import PropTypes from "prop-types";
import { StyledPargraph } from "./styles";

export const Paragraph = ({ text, size, weight }) => {
  return (
    <StyledPargraph size={size} weight={weight}>
      {text}
    </StyledPargraph>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.oneOf(["bold", "lighter", "bolder", "light"]),
};
