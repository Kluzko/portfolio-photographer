import React from "react";
import PropTypes from "prop-types";
import { Card, AlbumtTitle, LinkButton } from "./styles";
const BasicCard = ({ width, height, bckImg, color, children, link }) => {
  return (
    <Card width={width} height={height} bckImg={bckImg}>
      <AlbumtTitle color={color}>{children}</AlbumtTitle>
      <LinkButton background={color} to={link}>
        See more
      </LinkButton>
    </Card>
  );
};

BasicCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bckImg: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.string,
};

export default BasicCard;
