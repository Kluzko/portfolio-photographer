import React, { useState } from "react";
import MultipleImageUpload from "./MultipleImageUpload";
import ImageInput from "./ImageInput";
import { SubmitButton } from "../Buttons";

const FormImageUpload = (id) => {
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  if (error) {
    console.log(error);
  }
  const fileLength = file.length;
  return (
    <MultipleImageUpload
      file={file}
      setError={setError}
      loading={setLoading}
      id={id}
    >
      <ImageInput
        multiple={true}
        setFile={setFile}
        fileQuintity={fileLength}
        previewSource={false}
      />
      <SubmitButton loading={loading} />
    </MultipleImageUpload>
  );
};

export default FormImageUpload;
