import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { UPLOAD_PRESET, CLOUD_NAME } from "../../config";
import useHasUnmountedRef from "../../hooks/useHasUnmountedRef";
import { FetchContext } from "../../context/FetchContext";

const uploadImage = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const { data, statusText, status } = await axios.post(url, formData);

  if (statusText !== "OK") {
    throw new Error(`Can't upload image. ${status}`);
  }

  return await data.eager[0].secure_url;
};

const Form = ({
  file,
  loading,
  setError,
  album,
  color,
  children,
  method, //Method POST OR PUT
  url, //URL FOR PUT OR POST SINGLE OR MULTIPLE ALBUMS
  actualFile, // when You edit album and dont change file its doesnt reupload file
}) => {
  const fetchContext = useContext(FetchContext);
  let history = useHistory();
  const hasUnmountedRef = useHasUnmountedRef();

  const clearError = () => setError("");

  const createAlbum = async (album) => {
    const { data } = await fetchContext.authAxios.post(`albums`, album);

    return data.data._id;
  };

  const updateAlbum = async (album) => {
    await fetchContext.authAxios.put(`/albums/${url ? url : ""}`, album);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      if (!file) {
        throw new Error("Please select a file to add.");
      }

      if (!album.trim("") || !color.trim("")) {
        throw new Error("Please enter all the field values.");
      }
      let fileUrl = file;
      loading(true);
      if (actualFile !== file) {
        fileUrl = await uploadImage(file);
      }
      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }
      const data = {
        name: album,
        bckImgUrl: fileUrl || file,
        color: color,
      };
      let albumId = "";
      if (method === "POST") {
        albumId = await createAlbum(data);
      } else if (method === "PUT") {
        await updateAlbum(data);
      }
      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }
      if (method === "PUT") {
        history.push(`/albums`);
      } else {
        history.push(`/albums/${albumId}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      loading(false);
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.propTypes = {
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  loading: PropTypes.func,
  setError: PropTypes.func,
  album: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  method: PropTypes.oneOf(["PUT", "POST"]).isRequired,
  url: PropTypes.string,
};

export default Form;
