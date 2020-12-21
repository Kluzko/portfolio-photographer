import React, { useState } from "react";
import ImageInput from "../components/Forms/ImageInput";
import ColorInput from "../components/Forms/ColorInput";
import AlbumName from "../components/Forms/TextInput";
import SubmitButton from "../components/Buttons/SubmitButton";
import Form from "../components/Forms/Form";
import { FormWrapper } from "../components/Wrappers";
// Styles
import { Title, ErrorMsg, ImageWrapper } from "../components/Album/Styles";

const AddAlbum = () => {
  const [Loading, setLoading] = useState(false);
  // Album name
  const [albumName, setAlubmName] = useState();
  // Album title text color
  const [color, setColor] = useState();

  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show

  return (
    <FormWrapper>
      <Title>Add Album</Title>
      <Form
        file={file}
        loading={setLoading}
        setError={setErrorMsg}
        album={albumName}
        color={color}
      >
        <AlbumName
          setValue={setAlubmName}
          width="250px"
          placeholder="Trip to Ny..."
        >
          Enter Album Name
        </AlbumName>
        <ColorInput setColor={setColor} color={color} width="150px" />
        <ImageInput
          setFile={setFile}
          setPreviewSrc={setPreviewSrc}
          setIsPreviewAvailable={setIsPreviewAvailable}
        />

        {previewSrc && isPreviewAvailable && (
          <ImageWrapper>
            <Title>Album Cart Preview</Title>
            <p
              style={{
                color: color,
              }}
            >
              {albumName}
            </p>
            <img className="preview-image" src={previewSrc} alt="Preview" />
          </ImageWrapper>
        )}

        <SubmitButton width="15rem" loading={Loading} />
        {errorMsg && (
          <div>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </div>
        )}
      </Form>
    </FormWrapper>
  );
};

export default AddAlbum;
