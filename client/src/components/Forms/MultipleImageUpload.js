import React, { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { IMAGE_UPLOAD_PRESET, CLOUD_NAME } from "../../config";
import useHasUnmountedRef from "../../hooks/useHasUnmountedRef";
import { FetchContext } from "../../context/FetchContext";
const uploadImage = async (files) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
  let urls = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", IMAGE_UPLOAD_PRESET);
    const { data } = await axios.post(url, formData);

    urls.push(data.secure_url);
  }
  return urls;
};

const MultipleImageUpload = ({ file, loading, setError, children }) => {
  const fetchContext = useContext(FetchContext);
  const { id } = useParams();
  const hasUnmountedRef = useHasUnmountedRef();

  const clearError = () => setError("");

  const addImage = async (image) => {
    for (let i = 0; i < image.length; i++) {
      let imageUrl = image[i];
      await fetchContext.authAxios.post(`albums/${id}/image`, {
        image: imageUrl,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      if (!file) {
        throw new Error("Please select a file to add.");
      }

      let fileUrl = file;
      loading(true);

      fileUrl = await uploadImage(file);

      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }

      await addImage(fileUrl);

      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      loading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      {children}
    </form>
  );
};

MultipleImageUpload.propTypes = {
  loading: PropTypes.func,
  setError: PropTypes.func,
};

export default MultipleImageUpload;
