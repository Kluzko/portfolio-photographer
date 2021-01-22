import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Card, AlbumtTitle, LinkButton, IconWrapper } from "./styles";
import { Dialog } from "../Dialog";
import { FetchContext } from "../../context/FetchContext";

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
  const fetchContext = useContext(FetchContext);
  const handleClick = () => setState(!state);

  const handleDelete = async () => {
    const { data } = await fetchContext.authAxios.delete(`albums/${id}`);
    //to refetch on delete

    deleteId(data.data);
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
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  editLink: PropTypes.string.isRequired,
};

export default CardWithEdit;
