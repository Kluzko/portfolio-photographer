import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  ColorInput,
  TextInput,
  Form,
  ImageInput,
} from "../../components/Forms";
import { SubmitButton } from "../../components/Buttons";

import { FormWrapper, PreviewWrapper } from "../../components/Wrappers";

// Styles
import { FormTitle } from "../../components/Titles/styles";
import { BasicCard } from "../../components/Card";
import { SERVER_API } from "../../config";

// Max file size in Bytes
// 8 MB

const EditAlbum = () => {
  let { id } = useParams();
  // fetch data to show info before its updated

  const [Loading, setLoading] = useState(false);
  // Album name
  const [albumName, setAlubmName] = useState("");
  // Album title text color
  const [color, setColor] = useState();

  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show
  let actualFile = React.useRef("");
  React.useEffect(() => {
    async function fetchAlbum() {
      const { data } = await axios(`${SERVER_API}api/v1/albums/${id}`);
      const album = data.data;
      if (data) {
        setColor(album.color);
        setAlubmName(album.name);
        setPreviewSrc(album.bckImgUrl);
        actualFile.current = album.bckImgUrl;
        setIsPreviewAvailable(true);
        setFile(album.bckImgUrl);
      }
    }
    fetchAlbum();
  }, [id]);

  return (
    <FormWrapper>
      <FormTitle>Add Album</FormTitle>

      <Form
        file={file}
        loading={setLoading}
        setError={setErrorMsg}
        album={albumName}
        color={color}
        method="PUT"
        url={`/${id}`}
        actualFile={actualFile.current}
      >
        <TextInput
          setValue={setAlubmName}
          width="250px"
          placeholder={"Trip to Ny ...."}
          value={albumName}
        >
          Enter Album Name
        </TextInput>
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

export default EditAlbum;
