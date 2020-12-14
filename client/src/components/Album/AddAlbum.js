import React, { useState, useEffect } from "react";

// Styles
import {
  Wrapper,
  Title,
  StyledLabel,
  DefaultInput,
  StyledButton,
} from "./Styles";

const AddAlbum = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Album name
  const [albumName, setAlubmName] = useState();
  // Album title text color
  const [color, setColor] = useState();
  // file
  const [fileUrl, setFileUrl] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // cloudnary upload api endpoint
  const api_cloudinary =
    "https://api.cloudinary.com/v1_1/dhv5fupbk/image/upload";

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
    formData.append("upload_preset", "u5wuh435");
    setIsLoading(true);
    setError(null);

    // send cloudinary image and presets info

    try {
      const res = await fetch(api_cloudinary, {
        method: "POST",
        body: formData,
      });

      //get all data
      const img = await res.json();
      //  get url to send for db
      const fileUrl = await img.eager[0].secure_url;
      setFileUrl(fileUrl);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
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
          {isLoading ? "Please wait file is uploading" : "Submit"}
          Submit
        </StyledButton>
      </form>
    </Wrapper>
  );
};

export default AddAlbum;
