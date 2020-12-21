import React from "react";
import { useDropzone } from "react-dropzone";
import { Dropzone, DefaultInput, StyledLabel } from "./styles";

//Image preview setter and file setter
const ImageInput = ({ setFile, setPreviewSrc, setIsPreviewAvailable }) => {
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
  return (
    <div>
      <StyledLabel>Upload background image</StyledLabel>
      <Dropzone {...getRootProps()} isDragActive={isDragActive}>
        Select your image
        <DefaultInput {...getInputProps()} />
      </Dropzone>
    </div>
  );
};

export default ImageInput;
