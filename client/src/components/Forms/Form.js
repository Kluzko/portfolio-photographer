import React from "react";
import { useHistory } from "react-router-dom";
import { UPLOAD_PRESET, CLOUD_NAME, SERVER_API } from "../../config";
import useHasUnmountedRef from "../../hooks/useHasUnmountedRef";

const uploadImage = async (file) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Can't upload image. ${res.status}`);
  }

  const data = await res.json();
  return await data.eager[0].secure_url;
};

const createAlbum = async (data) => {
  const res = await fetch(`${SERVER_API}/api/v1/albums`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`An error has occurred: ${res.status}`);
  }

  const json = await res.json();
  return json.data._id;
};

const Form = ({ file, loading, setError, album, color, children }) => {
  let history = useHistory();
  const hasUnmountedRef = useHasUnmountedRef();

  const clearError = () => setError("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      if (!file) {
        throw new Error("Please select a file to add.");
      }

      if (!album.trim("") || !color.trim()) {
        throw new Error("Please enter all the field values.");
      }

      loading(true);

      const fileUrl = await uploadImage(file);
      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }

      const data = {
        name: album,
        bckImgUrl: fileUrl,
        color: color,
      };

      const albumId = await createAlbum(data);

      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }

      history.push(`/albums/${albumId}`);
    } catch (error) {
      setError(error.message);
    } finally {
      loading(false);
    }
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
