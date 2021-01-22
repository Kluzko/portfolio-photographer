import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
      const res = await fetch(`http://localhost:5000/api/v1/albums/${id}`);
      const data = await res.json();
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
        <AlbumName
          setValue={setAlubmName}
          width="250px"
          placeholder={"Trip to Ny ...."}
          value={albumName}
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

export default EditAlbum;
