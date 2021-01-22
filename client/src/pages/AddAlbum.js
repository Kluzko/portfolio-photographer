import React, { useState } from "react";
import ImageInput from "../components/Forms/ImageInput";
import ColorInput from "../components/Forms/ColorInput";
import AlbumName from "../components/Forms/TextInput";
import SubmitButton from "../components/Buttons/SubmitButton";
import Form from "../components/Forms/Form";
import { FormWrapper, PreviewWrapper } from "../components/Wrappers";
// Styles

import { FormTitle } from "../components/Titles/styles";
import BasicCard from "../components/Card/BasicCard";

// Max file size in Bytes
// 8 MB

const AddAlbum = () => {
  const [Loading, setLoading] = useState(false);
  // Album name
  const [albumName, setAlubmName] = useState("");
  // Album title text color
  const [color, setColor] = useState();

  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show

  return (
    <FormWrapper>
      <FormTitle>Add Album</FormTitle>
      <Form
        file={file}
        loading={setLoading}
        setError={setErrorMsg}
        album={albumName}
        color={color}
        method="POST"
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
          file
        />

        {previewSrc && isPreviewAvailable && (
          <PreviewWrapper>
            <BasicCard
              bckImg={previewSrc}
              width="30rem"
              height="25rem"
              color={color}
            >
              {albumName}
            </BasicCard>
          </PreviewWrapper>
        )}

        <SubmitButton width="15rem" loading={Loading} />
        {errorMsg && <div>{errorMsg}</div>}
      </Form>
    </FormWrapper>
  );
};

export default AddAlbum;
