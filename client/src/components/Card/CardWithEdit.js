import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Card, AlbumtTitle, LinkButton, IconWrapper } from "./styles";
import { Dialog } from "../Dialog";

const CardWithEdit = ({
  width,
  height,
  bckImg,
  color,
  children,
  link,
  editLink,
  id,
  deleteId,
}) => {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/albums/${id}`, {
      method: "DELETE",
    });
    //to refetch on delete
    const data = await res.json();
    deleteId(data._id);
    handleClick();
  };

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
        <div onClick={handleClick}>
          <AiOutlineDelete
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </IconWrapper>
      {state && (
        <Dialog
          handleClick={handleClick}
          handleDelete={handleDelete}
          deleteText={"Delete"}
        />
      )}
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
