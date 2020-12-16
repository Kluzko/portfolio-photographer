import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UPLOAD_PRESET, CLOUD_NAME } from "../../config";
// Styles
import {
  Wrapper,
  Title,
  StyledLabel,
  DefaultInput,
  StyledButton,
  Dropzone,
  ErrorMsg,
} from "./Styles";

const AddAlbum = () => {
  const [Loading, setLoading] = useState(0);
  // Album name
  const [albumName, setAlubmName] = useState();
  // Album title text color
  const [color, setColor] = useState();

  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        const res = await fetch(url, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const fileUrl = await data.eager[0].secure_url;

        setLoading(false);
        setErrorMsg("");
        if (albumName.trim() !== "" && color.trim() !== "" && fileUrl) {
          console.log(`
            albumName: ${albumName}
            color: ${color}
            backgroundUrl: ${fileUrl}

          `);
        } else {
          setErrorMsg("Please enter all the field values.");
        }
      } else {
        setErrorMsg("Please select a file to add.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
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
          <Dropzone {...getRootProps()} isDragActive={isDragActive}>
            Select your image
            <DefaultInput {...getInputProps()} />
          </Dropzone>
        </div>

        {/* TODO
        
          ADD animated color gradient wich starts when loading starts on loading = true
        
        */}
        {previewSrc && isPreviewAvailable && (
          <div className="image-preview">
            <img
              className="preview-image"
              src={previewSrc}
              alt="Preview"
              style={{
                width: "300px",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        <StyledButton type="submit" width="15rem">
          {Loading ? "Loading..." : "Submit"}
        </StyledButton>
        {errorMsg && (
          <div>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </div>
        )}
      </form>
    </Wrapper>
  );
};

export default AddAlbum;
