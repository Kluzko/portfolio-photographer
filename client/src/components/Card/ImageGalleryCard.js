import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { FetchContext } from "../../context/FetchContext";
import { Dialog } from "../Dialog";

export const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 15%;
  right: 3%;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  &.active {
    background-color: white;
  }
`;
const ImageGalleryCard = ({ id, src, refetch }) => {
  const auth = useContext(AuthContext);
  const fetchContext = useContext(FetchContext);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  const handleDelete = async () => {
    const { data } = await fetchContext.authAxios.delete(`images/${id}`);
    //to refetch on delete

    refetch(data.data);
  };

  return (
    <div className="image-wrapper">
      <img src={src} alt={`zdjecie-${id}`} loading="auto" />

      {auth.isAdmin() && (
        <DeleteIconWrapper
          onClick={handleClick}
          className={isActive ? "" : "active"}
        >
          <AiOutlineDelete
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          />
          {isActive && (
            <Dialog
              handleDelete={handleDelete}
              handleClick={handleClick}
              deleteText="Delete"
            />
          )}
        </DeleteIconWrapper>
      )}
    </div>
  );
};

export default ImageGalleryCard;
