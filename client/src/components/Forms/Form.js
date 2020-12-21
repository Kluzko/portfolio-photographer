import React from "react";
import { useHistory } from "react-router-dom";
import { UPLOAD_PRESET, CLOUD_NAME, SERVER_API } from "../../config";
const Form = ({ file, loading, setError, album, color, children }) => {
  let history = useHistory();

  // const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  // const addImage = useMutation(async (formData) => {
  //   const res = await fetch(url, formData);
  //   return await res.json();
  // });

  // console.log(addImage);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (file) {
        // if file is set send it to cloudinary api
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
        loading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(url, {
          method: "POST",
          body: formData,
        });
        // get data and pull out 1000w image url
        const data = await res.json();
        const fileUrl = await data.eager[0].secure_url;
        console.log(fileUrl);
        setError("");
        if (album.trim() !== "" && color.trim() !== "" && fileUrl) {
          // Craeting Date form
          const albumData = new FormData();
          albumData.append("name", album);
          albumData.append("bckImgUrl", fileUrl);
          albumData.append("color", color);
          // change albumData to json
          const object = {};
          albumData.forEach((value, key) => (object[key] = value));
          // sending data to /api/v1/albums
          const res = await fetch(`${SERVER_API}/api/v1/albums`, {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!res.ok) {
            const message = `An error has occured: ${res.status}`;
            setError(message);
          }
          const data = await res.json();
          const id = await data.data._id;
          loading(false);
          history.push(`/albums/${id}`);
        } else {
          setError("Please enter all the field values.");
        }
      } else {
        setError("Please select a file to add.");
      }
    } catch (error) {
      error.response && setError(error.response.data);
    }
  }
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
