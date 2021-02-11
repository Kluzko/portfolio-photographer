import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { EditorInnerContainer } from "./style";
import "quill/dist/quill.snow.css";

const QuilEditor = ({ state, defaultValue }) => {
  const { quill, quillRef, Quill } = useQuill();
  const {
    textInfo: [textInfo, setTextInfo],
  } = {
    textInfo: useState([]),
    ...(state || {}),
  };

  function imageHandler() {
    const range = quill.getSelection();
    const value = prompt("please copy paste the image url here.");
    if (value) {
      quill.insertEmbed(range.index, "image", value, Quill.sources.USER);
    }
  }

  useEffect(() => {
    if (quill) {
      // Add custom handler for Image Upload
      quill.getModule("toolbar").addHandler("image", imageHandler);
    }
    // If any message set it into edit
    if (quill && defaultValue) {
      const starterTextJSON = JSON.parse(defaultValue);
      setTextInfo(defaultValue);
      quill.setContents(starterTextJSON);
    }

    if (quill) {
      quill.on("text-change", () => {
        setTextInfo(JSON.stringify(quill.getContents()));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, quill, setTextInfo]);

  return (
    <EditorInnerContainer>
      <div ref={quillRef} />
    </EditorInnerContainer>
  );
};

export default QuilEditor;
