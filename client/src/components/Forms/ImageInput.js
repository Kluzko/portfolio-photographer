import React from "react";
import { useDropzone } from "react-dropzone";
import { Dropzone, DefaultInput, StyledLabel } from "./styles";
import { ErrorMsg } from "../ErrorMessage/styles";
import PropTypes from "prop-types";
//Image preview setter and file setter
const maxFileSize = 8388608;
const minFileSize = 0;

const ImageInput = ({
  setFile,
  multiple = false,
  fileQuintity,
  setPreviewSrc,
  setIsPreviewAvailable,
  previewSource = true,
}) => {
  const onDrop = (files) => {
    if (previewSource) {
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
    } else {
      setFile(files);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: "image/png, image/jpeg, image/jpg",
    multiple,
    maxSize: maxFileSize,
    minSize: minFileSize,
  });

  return (
    <div>
      <StyledLabel>Upload image</StyledLabel>
      <Dropzone {...getRootProps()} isDragActive={isDragActive}>
        {fileRejections.length > 0 ? (
          <ErrorMsg font="0.9rem">
            {fileRejections[0].errors[0].message}
          </ErrorMsg>
        ) : (
          `${
            fileQuintity > 0
              ? "You choose : " + fileQuintity + " files"
              : "Choose files"
          }`
        )}{" "}
        <DefaultInput {...getInputProps()} />
      </Dropzone>
    </div>
  );
};

ImageInput.propTypes = {
  setFile: PropTypes.func.isRequired,
  setPreviewSrc: PropTypes.func,
  setIsPreviewAvailable: PropTypes.func,
  multiple: PropTypes.bool,
  fileQuintity: PropTypes.number,
  previewSource: PropTypes.bool,
};

export default ImageInput;
