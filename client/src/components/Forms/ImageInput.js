import React from "react";
import { useDropzone } from "react-dropzone";
import { Dropzone, DefaultInput, StyledLabel } from "./styles";
import useFormatToMb from "../../hooks/useFormatToMb";
import { ErrorMsg } from "../ErrorMessage/styles";

//Image preview setter and file setter
const ImageInput = ({
  setFile,
  setPreviewSrc,
  setIsPreviewAvailable,
  maxFileSize,
}) => {
  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
    const fileReader = new FileReader();

    if (files.length > 0) {
      fileReader.onload = () => {
        setPreviewSrc(fileReader.result);
      };
      fileReader.readAsDataURL(uploadedFile);
      setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: "image/png, image/png, image/jpg",
    multiple: false,
    maxSize: maxFileSize,
  });

  // Format maxFileSize from byts to Mb

  const converted = useFormatToMb(maxFileSize);

  return (
    <div>
      <StyledLabel>Upload background image</StyledLabel>
      <Dropzone {...getRootProps()} isDragActive={isDragActive}>
        {fileRejections.length > 0 ? (
          <ErrorMsg font="1rem">Max file size is {converted} MB</ErrorMsg>
        ) : (
          `Select file`
        )}{" "}
        <DefaultInput {...getInputProps()} />
      </Dropzone>
    </div>
  );
};

export default ImageInput;
