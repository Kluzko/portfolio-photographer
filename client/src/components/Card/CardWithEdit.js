import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Card, AlbumtTitle, LinkButton, IconWrapper } from "./styles";
const CardWithEdit = ({
  width,
  height,
  bckImg,
  color,
  children,
  link,
  editLink,
}) => {
  return (
    <Card width={width} height={height} bckImg={bckImg}>
      <AlbumtTitle color={color}>{children}</AlbumtTitle>
      <LinkButton background={color} to={link}>
        See more
      </LinkButton>
      <IconWrapper>
        <div>
          <Link to={editLink}>
            <AiOutlineEdit />
          </Link>
        </div>
        <div>
          <AiOutlineDelete
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </IconWrapper>
    </Card>
  );
};

CardWithEdit.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bckImg: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  editLink: PropTypes.string.isRequired,
};

export default CardWithEdit;
