import React, { useState, useEffect } from "react";
import { API_KEY, UPLOAD_PRESET, CLOUD_NAME } from "../../config";
// Styles
import {
  Wrapper,
  Title,
  StyledLabel,
  DefaultInput,
  StyledButton,
  ErrorMsg,
} from "./Styles";

const AddAlbum = () => {
  const [Loading, setLoading] = useState(0);
  const [error, setError] = useState(false);
  // Album name
  const [albumName, setAlubmName] = useState();
  // Album title text color
  const [color, setColor] = useState();
  // file
  const [fileUrl, setFileUrl] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // preview as side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handlePreviewFile = (files) => {
    // check if it existss
    if (!files || files === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(files[0]);
  };

  // file upload
  const handleSingleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", API_KEY);
    formData.append("upload_preset", UPLOAD_PRESET);

    setError(null);
    setLoading(true);
    // send cloudinary image and presets info

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      //get all data
      const img = await res.json();
      //  get url to send for db
      const fileUrl = await img.eager[0].secure_url;
      setFileUrl(fileUrl);

      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  console.log(fileUrl);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSingleFileUpload(selectedFile);
  };
  return (
    <Wrapper>
      <Title>Add Album</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <StyledLabel>Album name</StyledLabel>
          <DefaultInput
            type="text"
            placeholder="Trip to NY..."
            width="300px"
            onChange={(e) => setAlubmName(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel>Choose Album name color</StyledLabel>
          <DefaultInput
            type="color"
            width="150px"
            onChange={(e) => setColor(e.target.value)}
            value={color || "#000000"}
          />
        </div>
        <div>
          <StyledLabel>Upload background image</StyledLabel>
          <DefaultInput
            type="file"
            onChange={(e) => handlePreviewFile(e.target.files)}
          />
        </div>
        {selectedFile && (
          <div>
            <p>Image preview of {albumName} </p>
            <img
              src={preview}
              alt={preview}
              style={{
                width: "400px",
                objectFit: "contain",
              }}
            />
          </div>
        )}
        <StyledButton type="submit">
          {Loading ? "Loading..." : "Submit"}
        </StyledButton>
        {error && <ErrorMsg>Someting went wrong</ErrorMsg>}
      </form>
    </Wrapper>
  );
};

export default AddAlbum;
